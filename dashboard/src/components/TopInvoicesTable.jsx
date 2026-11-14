import qtyPerInvoice from '../data/qty_per_invoice.json'
import { formatNumber } from '../utils/format'

function TopInvoicesTable() {
  return (
    <section className="panel orders-panel" aria-labelledby="orders-title">
      <div className="panel-header"><div><h2 id="orders-title">Largest single orders</h2><p className="panel-description">The 10 largest invoices by quantity ordered.</p></div><span className="unit-label">Units</span></div>
      <div className="table-scroll" role="region" aria-label="Largest orders" tabIndex="0">
        <table className="orders-table">
          <caption className="sr-only">Top 10 largest single orders by quantity</caption>
          <thead><tr><th scope="col">Customer ID</th><th scope="col">Invoice</th><th scope="col" className="numeric">Quantity</th></tr></thead>
          <tbody>
            {qtyPerInvoice.map(row => (
              <tr key={row.Invoice}><th scope="row">{row['Customer ID']}</th><td><span className="invoice-number">#{row.Invoice}</span></td><td className="numeric">{formatNumber(row.Quantity)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="panel-footnote">Large quantities highlight bulk-purchasing behavior.</p>
    </section>
  )
}

export default TopInvoicesTable
