# E-Commerce Sales Analytics Dashboard

An interactive data analysis project exploring transactional sales data from a UK-based online retailer, covering revenue trends, top-performing products, customer behavior, and geographic sales distribution — cleaned with pandas and visualized in a live React dashboard.

**Live dashboard:** [ecommerce-dashboard-rho-peach.vercel.app](https://ecommerce-dashboard-rho-peach.vercel.app/)

## Overview

This project analyzes over 800,000 cleaned transaction records to answer practical business questions:
- How does revenue trend across months?
- Which products and customers drive the most value?
- Which countries generate the most sales outside the home market?
- How many customers are repeat buyers?

The project covers the full pipeline: raw, messy transactional data → cleaned datasets (pandas) → aggregated KPIs → interactive dashboard (React + Recharts), deployed live.

## Dataset

This project uses the [Online Retail II dataset](https://archive.ics.uci.edu/dataset/502/online+retail+ii) from the UCI Machine Learning Repository — real invoice-level transaction data from a UK-based online retailer, covering December 2009 to December 2011.

**To run this project:** download the dataset from the link above and place the CSV in the `data/` folder as `online_retail_II.csv`.

## Data Cleaning

Starting from 1,067,371 raw rows, the following cleaning steps were applied:

| Step | Rows Remaining | Notes |
|---|---|---|
| Raw data | 1,067,371 | |
| Remove missing Customer ID | 824,364 | Needed for any customer-level analysis |
| Remove cancellations | 805,620 | Invoices prefixed with "C" represent returns, not sales |
| Remove non-positive Quantity/Price | 805,549 | Leftover adjustment/error entries |

Additional cleaning:
- Converted `InvoiceDate` from text to proper datetime format
- Created a `Revenue` column (`Quantity × Price`)
- Excluded non-product line items ("Manual", "Postage") from product-level analysis
- Standardized country naming ("Eire" → "Ireland")

## Key Metrics (2010)

- **Total Revenue:** £8,571,212.55
- **Total Orders:** 18,157
- **Total Customers:** 4,217
- **Average Order Value:** £472.06
- **Repeat Customer Rate:** 66.3% (2,795 repeat customers vs. 1,422 one-time buyers)

## Key Findings

- **Seasonal trend:** Revenue climbs steadily through the year, peaking in November — consistent with pre-holiday shopping demand
- **Top product:** "Regency Cakestand 3 Tier" was the single highest revenue-generating product
- **Market concentration:** The UK accounts for the vast majority of revenue, with Ireland, Netherlands, and Germany as the next largest markets — each far smaller in comparison
- **Customer loyalty:** Roughly two-thirds of customers are repeat buyers, suggesting strong retention for the core customer base
- **Bulk orders:** A small number of customers and invoices account for disproportionately large order quantities, indicating some wholesale or bulk-buying behavior

## Dashboard Sections

- Summary stat cards (Revenue, Orders, Customers, AOV, Repeat Rate)
- Revenue by month (2010)
- Top 10 best-selling products by revenue
- Revenue by country (with and without UK, to surface smaller markets)
- Top 10 customers by quantity purchased
- Top 10 largest single orders (table)

## Tech Stack

- **Python** — pandas, matplotlib for data cleaning and exploratory analysis
- **Jupyter Notebook** — exploration and analysis documentation
- **React (Vite)** — dashboard frontend
- **Recharts** — chart visualizations
- **Vercel** — deployment/hosting

## Project Structure

```
ecommerce-dashboard/
├── data/                          → raw and cleaned datasets, JSON exports (raw CSVs gitignored, see Dataset section)
├── notebook/
│   ├── exploration.ipynb          → initial exploration and cleaning process
│   └── analysis.ipynb             → final analysis, KPI calculations, and chart generation
├── dashboard/                     → React dashboard frontend
│   ├── src/
│   │   ├── components/            → individual chart/table components
│   │   ├── data/                  → JSON data consumed by the dashboard
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── README.md
```

## Running Locally

**Notebook (data cleaning & analysis):**
1. Download the dataset (see Dataset section) into `data/`
2. Open `notebook/exploration.ipynb` or `notebook/analysis.ipynb` in Jupyter or VS Code
3. Run cells in order to reproduce the cleaning and analysis steps

**Dashboard:**
```
cd dashboard
npm install
npm run dev
```

## Author

Client Steven S. Frilles
[GitHub](https://github.com/stvnfrlls) | [Portfolio](https://stvnfrlls.github.io/myPortfolio)