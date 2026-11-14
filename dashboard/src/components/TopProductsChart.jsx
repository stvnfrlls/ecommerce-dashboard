import topProducts from '../data/top_products.json'
import RankedList from './RankedList'
import { formatCurrency, formatProductName } from '../utils/format'

function TopProductsChart() {
  const rows = topProducts.map(row => ({ label: formatProductName(row.Product), value: row.Revenue, formattedValue: formatCurrency(row.Revenue) }))

  return (
    <section className="panel" aria-labelledby="products-title">
      <div className="panel-header"><div><h2 id="products-title">Best-selling products</h2><p className="panel-description">The top 10 products, ranked by revenue.</p></div><span className="unit-label">GBP</span></div>
      <RankedList rows={rows} valueLabel="Top products by revenue in pounds" />
      <p className="panel-footnote">Non-product items, including postage, are excluded.</p>
    </section>
  )
}

export default TopProductsChart
