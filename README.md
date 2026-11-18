# 2026 COMMERCIAL REVIEWS

Cook County Board of Review commercial review tool: income worksheet (loaded cap rate, 2026 Assessor method) and sales comps map. It has two outputs: the **PTAB PDF (State Form)** and the **Analyst Report**. It is a fork of the Grok-hosted "Income Approach" app (https://zephyr-ocean-brush-delta.grok.me/) with the same calculations and look.

## What's here

```
app/
  index.html                  entry page (static, no server code)
  assets/index-cr2026.js      React runtime + router (original bundle, retitled)
  assets/routes-cr2026.js     the app (original route bundle + 2026 COMMERCIAL REVIEWS code, marked "cr")
  assets/cr2026.css           styles for the new panels and the printable report
  assets/styles-*.css, leaflet-*, rolldown-runtime-*.js   original assets
  forms/PTAB6C.pdf, PTAB6I.pdf  blank PTAB forms filled by "PTAB PDF (State Form)"
build/                        source of the additions and the patch script (./build.sh rebuilds app/assets)
orig/                         the original app files, for reference
```

There's no npm build. `build/build.sh` concatenates `cr_module.js`, `cr_lookup.js`, `cr_report.js`, `cr_manual.js`, `cr_income.js` and `cr_embed.js` and string-patches them into the original bundle. Each patch checks that its anchor text matches exactly once.

Host the `app/` folder at the **root of a site or subdomain** (the router serves path `/`), for example ArcGIS Online-adjacent IIS, GitHub Pages with a custom domain, or `python -m http.server` for testing:

```
cd app && python3 -m http.server 8822   # then open http://localhost:8822/
```

## Main workflow (manual)

The top of the page is the entry point:
- **Step 1 · Enter case** ("Start here"): large **Case / Docket Number** and **Subject PIN (14 digits)** boxes (dashes optional, with an `x/14 digits` count and a green check when complete) and a **Look up property** button (Enter works too). The first empty box gets focus. After a successful lookup the card shrinks to a summary bar (docket · PIN · address) with **Edit**; it opens again if the docket and PIN are cleared.
- **Fill with sample data** (next to the PIN): opens the original app's rotary PIN wheel over every key PIN in the Assessor commercial valuation data (`csik-bsws`, about 64,700 PINs). It is a modal on desktop and a full-height drawer in the side panel. A filter box (address, PIN, class such as `5-93`, or use) and a township picker search the dataset on the server. Rows load 300 at a time as you scroll, and only about 30 are drawn at once. Scroll or arrow-key to a property, then press **Use this property** (or tap the centered row) to fill the PIN and run the lookup. With no docket the case is labeled **Sample / no docket**: the docket is optional, the Start-here card still shrinks, and both PDFs are named `SAMPLE_<PIN>.pdf`. The heads-up still lists the missing docket. Typing a PIN by hand turns sample mode off, and typing a docket switches the names back to `<docket>_<PIN>.pdf`.
- **Step 2 · Analyst & request**: Analyst name, Requested Market Value and Requested AV (still required).
- Until a lookup succeeds, the sections below are dimmed with "Enter a PIN to begin", but they can still be typed in by hand.
- Blank fields are colored: required ones get an amber fill and accent border (a green check once filled); other empty editable fields (for example income fields with no Assessor value) get a lighter amber tint. Screen only; prints are unaffected.


1. **Case / Docket Number** and **Subject PIN** define the subject. Add your **Analyst name**, which is remembered in this browser.
2. When the PIN reaches 14 digits (or you press **Look up**), the app pulls from the Cook County open data portal:
   * Parcel Universe `pabr-t5kh`: location, class, township, tax code
   * Assessed Values `uzyt-m557`: valuation history (mailed, certified and board AVs)
   * Parcel Sales `wvhk-k5uv`: 10-year sale history for the subject, plus comps
   * Assessor Commercial Valuation `csik-bsws`: income data for the worksheet and the equitability averages
   * BOR Appeal Decision History `7pny-nedm`: prior BOR decisions and the tax code
3. Comps are limited to **sales in the last 3 years within 15 miles** of the subject. They show the straight-line distance in miles and are sorted nearest first. Check **Use comp** for the sales approach and both reports.
4. *(Optional)* **Load the Commercial Review Extract CSV**. It stays in this browser (IndexedDB) and is never uploaded. Typing a docket number or PIN then also fills complaint status, requested value and the other BOR docket fields.
5. Make the report: **PTAB PDF (State Form)** or **Analyst Report** (see Reports). There are no CSV/JSON exports, no "Reviewed" flag, and no separate copy-worksheet or print-worksheet buttons; the two reports are the only outputs. Cases are still saved in this browser.

## Experience Builder (optional prefill)

In the Experience Builder app, add an **Embed** widget, choose **By URL**, and connect it to the Commercial Review Extract layer's data source. Insert attributes with `{field}` placeholders. Minimum:

```
https://YOUR-HOST/?pin14={pin14}&case_number={BOR_PTAB_Docket_ID}
```

Recommended (fills the worksheet and the read-only subject panel without waiting for the lookup):

```
https://YOUR-HOST/?pin14={pin14}&BOR_PTAB_Docket_ID={BOR_PTAB_Docket_ID}&BOR_PTAB_Status={BOR_PTAB_Status}&BOR_Filing_Year={BOR_Filing_Year}&BOR_Property_Address={BOR_Property_Address}&BOR_Property_City={BOR_Property_City}&BOR_Township={BOR_Township}&BOR_Township_Num={BOR_Township_Num}&BOR_Property_Type={BOR_Property_Type}&BOR_Total_AV={BOR_Total_AV}&BOR_Land_AV={BOR_Land_AV}&BOR_Improvement_AV={BOR_Improvement_AV}&BOR_Requested_AV={BOR_Requested_AV}&BOR_PTAB_Valuation_Req={BOR_PTAB_Valuation_Req}&Document_Name={Document_Name}&lat={lat}&lon={lon}&inc_use={inc_use}&inc_class={inc_class}&inc_bldgsf={inc_bldgsf}&inc_nrsf={inc_nrsf}&inc_pgi={inc_pgi}&inc_vacancy={inc_vacancy}&inc_exp={inc_exp}&inc_noi={inc_noi}&inc_caprate={inc_caprate}&inc_fmv={inc_fmv}&inc_exlandv={inc_exlandv}&inc_adjrent={inc_adjrent}&av_cur_year={av_cur_year}&av_cur_stage={av_cur_stage}&av_cur_class={av_cur_class}&av_cur_tot={av_cur_tot}&av_prv_year={av_prv_year}&av_prv_tot={av_prv_tot}&bor_prev_year={bor_prev_year}&bor_result={bor_result}&bor_post_tot={bor_post_tot}&sale_date={sale_date}&sale_price={sale_price}
```

* Params can go in the query string or the hash (`#pin14=...`). Hash changes and back/forward reload the case without a page reload.
* A parent page can also send `window.postMessage({attributes:{pin14:'...', ...}}, '*')` (also accepted: a bare attribute object, `{feature:{attributes}}`, or a JSON string). Messages are only accepted from the parent or opener window.
* A map click on a PIN that's already saved reopens that case and only fills its empty fields, so your edits stay. A new PIN creates a new case.
* Empty, `null`, or unresolved `{field}` values are ignored.
* Sample test URL (a real row, pin14 30084160400000): see `../sample_test_url.txt`.

### Supported params

Any of the 225 `agol_name` fields in `commercial_review_extract_schema.json` (exact names, matched case-insensitively) is accepted and shown under "All harvested fields". Fields that feed the worksheet:

| Case field | Params (first non-empty wins) |
|---|---|
| PIN | `pin14`, `pin`, `keypin`, `BOR_PIN`, `pin_dashed`, `inc_keypin`, `matched_pin` (padded to 14 digits; leading zeros kept) |
| Docket / Complaint # | `case_number`, `case`, `BOR_PTAB_Docket_ID` |
| Analyst | `analyst` |
| Address / case name | `BOR_Property_Address` + `BOR_Property_City`, else `matched_address`, `inc_address` |
| Township | `BOR_Township`, `inc_township`, `av_cur_town` |
| Class + level of assessment | `av_cur_class`, `BOR_PTAB_Property_Class`, `BOR_Property_Class`, `inc_class` (5xx gives 5a at 25%; 550/580/581/583/587/589/593 give 5b at 25%; 3xx/2xx/1xx at 10%; 4xx at 20%; 6xx–8xx incentive at 10%) |
| Net rentable area | `inc_nrsf`, `inc_bldgsf`, `BOR_Sq_Ft_Building` |
| Units | `inc_units`, `inc_apt` |
| PGI | `inc_pgi` (direct); if that's missing, `inc_adjrent` × area (rent per sf) |
| Vacancy | `inc_vacancy`, `BOR_Vacancy_Pct` (values over 1 are treated as percent) |
| Expenses | `inc_exp` as a ratio, else `inc_totalexp` as dollars |
| Market cap | `inc_caprate` |
| Additional land | `inc_exlandv` |
| Original assessment | `av_cur_tot`, `BOR_Total_AV`, `av_cur_mtot` |
| Tax year | `tax_year`, `av_cur_year` (default 2026) |
| Location | `lat`, `lon` (or `lng`) |

Report fields: `BOR_PTAB_Status`, `BOR_Filing_Year`, `BOR_Township_Num`, `BOR_Property_Type`, `BOR_Land_AV`, `BOR_Improvement_AV`, `BOR_Total_AV`, `BOR_Requested_AV`, `Document_Name`. The subject panel also shows `inc_*`, `av_*`, `bor_*`, `sale_*`, and the BOR appeal, attorney and deadline fields.

## Calculations (same as the original)

PGI (direct, rent/sf × NRA, or rent/unit × units × 12) − vacancy (vacancy rate × PGI) + other income (not vacated) = EGI. EGI − expenses ex-tax (% of EGI, lump sum, or line items) = NOI. Tax load = LOA × equalization factor × composite tax rate, rounded to 4 decimals. Loaded cap = market cap + tax load. The Assessor cap rate (`inc_caprate`) is an unloaded market cap, so the district tax load is always added on top of it. District tax rate: the PIN lookup reads the subject's tax code (Parcel Universe pabr-t5kh, then BOR 7pny-nedm, then Assessor income `taxdist`; Experience Builder `tax_code`/`inc_taxdist` also accepted) and fills the composite rate for the selected equalization year (2024 or 2025) from `assets/taxcode-rates.json`, built from the Cook County Clerk's tax-code rate files. Picking 2024 or 2025 refills the rate; Custom leaves it alone; typing a rate makes it the analyst's value. The rate's source is shown under the field and in the Analyst Report. Indicated value = round(NOI ÷ loaded cap). Concluded value = round to the nearest $1,000 of (indicated + additional land). New AV = round(value × LOA). EAV = round(AV × factor). CCAO check: $1,000,000 PGI, 10% vacancy, 20% expenses, 6.25% + 6.81% gives 13.06%, $5,513,017, $5,513,000, AV $1,378,250, EAV $4,183,678.

The report's income page uses the worksheet's NOI and loaded cap (market value = NOI ÷ loaded cap, unrounded; AV = MV × LOA). Additional vacancy: Market land = Land AV ÷ LOA; 1 Year MV = Market land + PRC column 4 × additional occupancy factor; 1 Year A/V = round(1 Year MV × LOA).

Equitability page: the search group is the subject's latest `csik-bsws` year, the same investment rating, size tier (A <5k, B 5–15k, C 15–50k, D 50–150k, E 150k+ sf, by building sf), the same major class, and the same township as the location. It falls back to countywide when fewer than 5 records match. Workbook PGI = average rent/sf × SQFT. Market gross workbook = average final value/sf × SQFT. Both averages can be overridden.

## Property photos

The subject and each comparable (auto and analyst-entered) use the first building photograph from the Cook County Assessor PIN page (`prodassets.cookcountyassessoril.gov/s3fs-public/pin_detail/…/{PIN}_AA.jpg` or `.JPG`). Street View imagery on that page is skipped. If the Assessor has no building photo — typical for vacant land — or the photo fails to load, the report falls back to an Esri World Imagery aerial. Each image is captioned **Assessor photo** or **Aerial**. A Street View link remains on the subject's on-screen photo (not printed).

The Analyst Report and the on-screen PIN thumbnails load the Assessor file directly in an `<img>` (no CORS needed) and switch to the aerial on error, with an 8-second timeout so a print never hangs. The PTAB PDF has to embed image bytes; the Assessor CDN does not send CORS headers, and CloudFront blocks non-browser clients, so those bytes are read through `api.allorigins.win` only for the PDF. If that route is slow or down, the exhibit uses the aerial instead. Aerials come from Esri, which already allows CORS.

## Not included

* Location rating isn't in the public Assessor data, so it's an editable box (the township is used as the location filter).


## Reports
The two outputs. The buttons are in the Case panel and the Reports section:
- **PTAB PDF (State Form)**: the official Illinois PTAB notes on appeal (PTAB-6C commercial or PTAB-6I industrial), filled with pdf-lib. It fills from the case: subject, PTAB docket and appellant when known, the checked sales grid (up to 9, analyst-entered comps included and labeled), and the exhibit page. A "Board of Review notes on appeal" page with the analyst's comments, requested value and analyst-entered comps is added when there are any. It downloads as a PDF.
- **Analyst Report**: the five-page Commercial Review Worksheet, printed from the browser (letter size; use Save as PDF). Page 3 is a **Comparable Sales Grid** modeled on the PTAB-6C/6I comparable-sales section. It lists the subject first, then each checked comp (auto and analyst-entered) with Source, PIN, address, proximity (mi), sale date, sale price, building sf, land sf, $/sf, class, and year built / age. Land sf and year built come from `csik-bsws` when available. An Avg row and the average $/sf and average price close the grid. Long lists continue on the next sheet with the header repeated. It includes the comment boxes and 0 to 5 blank lined "Additional Notes" pages (default 2). Each notes page has the complaint #, PIN, and analyst in its header.

Both are named `<docket>_<PIN>.pdf` (for example `2022-77-16242_17204390020000.pdf`). The PTAB download uses that name directly; the Analyst Report sets the page title so the browser's Save as PDF suggests it. Characters that aren't allowed in file names are replaced.

**Required inputs:** Docket / Complaint #, Analyst name, PIN, and a requested amount (MV or AV) are grouped at the top of the Case panel and marked with *. If any are blank, either report button shows a short heads-up and still makes the report.

**Income defaults:** after a PIN lookup, the income fields (PGI, rent, vacancy, other income, expenses, market cap, NRA, units, additional land) start from the Assessor's commercial valuation (`csik-bsws`). Each field is tagged *Assessor* or *Edited* and has a reset link; **Reset all to Assessor** restores them all. Edits are saved with the case and are kept when the PIN is looked up again.

## Comments
The comment fields are reviewer comments (under Reviewer Value Conclusions), document name / notes, sales comparison, income approach, and equitability. They are multi-line, saved in the case (`report.*`), and printed with wrapping. Long text continues onto the next sheet.

## Analyst-entered comps
Use "Add comp" under the sales list. Enter a PIN (optional), address, sale date, price, building sf, land sf, class, and lat/lon. The location comes from the PIN (Parcel Universe pabr-t5kh, then Address Points 78yw-iddh), or from the address (Cook County Address Points, then the Esri World Geocoder), or from a typed lat/lon. The form shows $/sf and the distance from the subject. These comps skip the 3-year / 15-mile screen but show a warning when they fall outside it. They get a purple map marker, an "Analyst-entered" label in the sales approach, PTAB grid, and report cards, and are saved as `manualComps` on the case. Each one can be edited, unchecked, or deleted.

## Requested value
The Case panel has **Requested Market Value** and **Requested AV** fields for what the appellant requested. They are filled in by hand and need no lookup. Type either one and the other is converted at the level of assessment of the class listed on the case (AV = MV × LOA, MV = AV ÷ LOA). The converted field shows an "auto" tag. The case also saves which field was typed (`requestedEnteredAs`) and the LOA used.

The extract CSV and URL parameters can prefill these fields, but only when both are empty. `BOR_Requested_AV` or `requested_av` prefills the AV. `BOR_PTAB_Valuation_Req` or `requested_mv` prefills the MV.

Where the values appear:
- **Analyst Report:** the Requested MV and Requested AV boxes, plus "VS REQUEST" (new AV minus requested AV).
- **PTAB PDF (State Form):** the official form has no requested-value field, so the value goes on the added "Board of Review notes on appeal" page.

## Side panel (Experience Builder Embed widget)
The page is built to sit in a narrow Embed widget (about 320–480 px wide). Below 640 px it becomes one column: the required case inputs come first, then collapsible **Case**, **Sales map & comps**, **Income**, and **Reports** sections. Tap a section header to open or close it; the state is remembered in this browser. The sales map is about 280 px tall, comps are cards, controls are at least 44 px tall, and wide tables scroll inside their own box, so the page never scrolls sideways. Both reports still print and download as full letter pages.

Embed widget iframe needs. If you set a `sandbox` attribute, or your host adds one, allow:
- `allow-scripts allow-same-origin`: the app, the saved cases (localStorage/IndexedDB), and the open data lookups.
- `allow-downloads`: the PTAB PDF download.
- `allow-modals`: the browser print dialog for the Analyst Report.
- `allow-popups allow-popups-to-escape-sandbox`: the new-tab fallback.

Fallbacks when the panel blocks them:
- **Print blocked:** the Analyst Report opens in a new tab (`?case=<id>&cr_print=1`), and the print dialog opens there. The case is read from this browser's saved cases.
- **Download blocked:** after the PTAB PDF is made, an "Open the PDF in a new tab" link appears next to the buttons.
- If popups are blocked too, open the tool in its own tab. Check the widget's iframe in the browser dev tools to see which sandbox flags it has.
