import stats from '../data/summary_stats.json'
import { formatCompactCurrency, formatCurrency, formatNumber } from '../utils/format'

function SummaryStats() {
  const metrics = [
    { label: 'Total revenue', value: formatCompactCurrency(stats.totalRevenue), detail: `${formatCurrency(stats.totalRevenue)} in sales`, primary: true },
    { label: 'Orders', value: formatNumber(stats.totalOrders), detail: 'Completed purchases' },
    { label: 'Customers', value: formatNumber(stats.totalCustomers), detail: 'Unique customers' },
    { label: 'Average order value', value: formatCurrency(stats.avgOrderValue), detail: 'Revenue per order' },
    { label: 'Repeat customer rate', value: `${stats.repeatRate}%`, detail: `${formatNumber(stats.repeatCustomers)} returning customers` },
  ]

  return (
    <dl className="stats-row" aria-label="2010 summary metrics">
      {metrics.map(metric => (
        <div className={`stat${metric.primary ? ' stat-primary' : ''}`} key={metric.label}>
          <dt>{metric.label}</dt>
          <dd className="stat-value">{metric.value}</dd>
          <dd className="stat-detail">{metric.detail}</dd>
        </div>
      ))}
    </dl>
  )
}

export default SummaryStats
