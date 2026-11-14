import { useState } from 'react'
import revenueByCountry from '../data/revenue_by_country.json'
import RankedList from './RankedList'
import { formatCurrency } from '../utils/format'

function RevenueByCountryChart() {
  const [includeUK, setIncludeUK] = useState(false)
  const countries = includeUK ? revenueByCountry : revenueByCountry.filter(row => row.Country !== 'United Kingdom')
  const rows = countries.map(row => ({ label: row.Country, value: row.Revenue, formattedValue: formatCurrency(row.Revenue) }))

  return (
    <section className="panel markets-panel" aria-labelledby="markets-title">
      <div className="panel-header"><div><h2 id="markets-title">Revenue by country</h2><p className="panel-description">Explore the home market and sales abroad.</p></div><span className="unit-label">GBP</span></div>
      <div className="market-toolbar">
        <div className="segmented-control" role="group" aria-label="Country view">
          <button type="button" aria-pressed={!includeUK} onClick={() => setIncludeUK(false)}>International</button>
          <button type="button" aria-pressed={includeUK} onClick={() => setIncludeUK(true)}>Including UK</button>
        </div>
        <span className="market-count" aria-live="polite">{countries.length} markets</span>
      </div>
      <RankedList rows={rows} valueLabel={includeUK ? 'Top 10 countries by revenue in pounds' : 'Top international countries by revenue in pounds'} />
      <p className="panel-footnote">Country export totals span a different period from the 2010 summary.</p>
    </section>
  )
}

export default RevenueByCountryChart
