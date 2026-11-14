import topCustomers from '../data/top_customers.json'
import RankedList from './RankedList'
import { formatNumber } from '../utils/format'

function TopCustomersChart() {
  const rows = topCustomers.map(row => ({ label: `Customer ${row['Customer ID']}`, value: row.Quantity, formattedValue: formatNumber(row.Quantity) }))

  return (
    <section className="panel customers-panel" aria-labelledby="customers-title">
      <div className="panel-header"><div><h2 id="customers-title">Highest-volume customers</h2><p className="panel-description">The top 10 customers by quantity purchased in 2010.</p></div><span className="unit-label">Units</span></div>
      <RankedList rows={rows} valueLabel="Top customers by units purchased" />
      <p className="panel-footnote">Customers are identified by their original customer ID.</p>
    </section>
  )
}

export default TopCustomersChart
