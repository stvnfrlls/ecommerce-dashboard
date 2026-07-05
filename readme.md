# E-Commerce Sales Data Analysis

A data analysis project exploring transactional sales data from a UK-based online retailer, covering revenue trends, top-performing products, and geographic sales distribution.

## Overview

This project analyzes over 1 million transaction records to answer practical business questions:
- How does revenue trend across months?
- Which products drive the most revenue?
- Which countries generate the most sales outside the home market?

The analysis moves from raw, messy transactional data to cleaned datasets and clear visualizations, with the long-term goal of powering a live interactive dashboard.

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

## Key Findings

- **Total revenue analyzed:** ~£17.7M across cleaned transactions
- **Seasonal trend:** Revenue climbs steadily through the year, peaking in November — consistent with pre-holiday shopping demand
- **Top product:** "Regency Cakestand 3 Tier" was the single highest revenue-generating product
- **Market concentration:** The UK accounts for the vast majority of revenue (~£14.6M), with Ireland, Netherlands, and Germany as the next largest markets — each far smaller in comparison

## Charts

- Revenue by month (year-specific view)
- Top 10 best-selling products by revenue
- Revenue by country (with and without UK, to surface smaller markets)

*(Screenshots to be added here once finalized)*

## Tech Stack

- **Python** — pandas, matplotlib for data cleaning and exploratory analysis
- **Jupyter Notebook** — exploration and analysis documentation
- *(Dashboard frontend — to be added: React / Chart.js, hosted on GitHub Pages)*

## Project Structure

```
ecommerce-dashboard/
├── data/                   → raw and cleaned datasets (gitignored, see Dataset section)
├── notebook/
│   ├── exploration.ipynb   → initial exploration and cleaning process
│   └── analysis.ipynb      → final analysis and chart generation
├── src/                    → dashboard frontend (in progress)
└── README.md
```

## Author

Client Steven S. Frilles
[GitHub](https://github.com/stvnfrlls) | [Portfolio](https://stvnfrlls.github.io/myPortfolio)