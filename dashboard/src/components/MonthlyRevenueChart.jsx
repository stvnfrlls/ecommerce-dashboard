import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import monthlyRevenue from '../data/monthly_revenue.json'
import { formatCompactCurrency, formatCurrency } from '../utils/format'

const peak = monthlyRevenue.reduce((highest, month) => month.Revenue > highest.Revenue ? month : highest, monthlyRevenue[0])

function MonthlyRevenueChart() {
  return (
    <section className="panel revenue-panel" aria-labelledby="revenue-title">
      <div className="panel-header">
        <div><h2 id="revenue-title">Revenue over time</h2><p className="panel-description">Monthly sales performance throughout 2010.</p></div>
        <div className="peak-note"><span className="legend-dot" aria-hidden="true" /><span>Peak month <strong>{peak.Month} · {formatCompactCurrency(peak.Revenue)}</strong></span></div>
      </div>
      <div className="revenue-chart" role="img" aria-label={`Monthly revenue in 2010. Peak: ${peak.Month}, ${formatCurrency(peak.Revenue)}. Exact monthly values are available in the data table below.`}>
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart data={monthlyRevenue} margin={{ top: 16, right: 4, bottom: 0, left: 0 }} barCategoryGap="28%">
            <CartesianGrid vertical={false} stroke="var(--line)" strokeDasharray="3 5" />
            <XAxis dataKey="Month" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted)', fontSize: 11 }} tickMargin={12} interval="preserveStartEnd" minTickGap={8} />
            <YAxis axisLine={false} tickLine={false} width={56} tick={{ fill: 'var(--muted)', fontSize: 11 }} tickFormatter={formatCompactCurrency} ticks={[0, 400000, 800000, 1200000]} domain={[0, 1200000]} />
            <Tooltip cursor={{ fill: 'var(--accent-soft)' }} formatter={value => [formatCurrency(value), 'Revenue']} labelFormatter={label => `${label} 2010`} contentStyle={{ border: '1px solid var(--line)', borderRadius: 12, color: 'var(--ink)', fontSize: 13 }} />
            <Bar dataKey="Revenue" radius={[5, 5, 0, 0]} maxBarSize={52} isAnimationActive={false}>
              {monthlyRevenue.map(month => <Cell key={month.Month} fill={month.Month === peak.Month ? 'var(--accent)' : 'var(--bar)'} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-bottom"><span>Revenue in GBP</span><span>January – December 2010</span></div>
      <details className="data-details">
        <summary>View monthly data</summary>
        <table><caption className="sr-only">Monthly revenue for 2010 in pounds</caption><thead><tr><th scope="col">Month</th><th scope="col" className="numeric">Revenue</th></tr></thead><tbody>{monthlyRevenue.map(month => <tr key={month.Month}><th scope="row">{month.Month} 2010</th><td className="numeric">{formatCurrency(month.Revenue)}</td></tr>)}</tbody></table>
      </details>
    </section>
  )
}

export default MonthlyRevenueChart
