import stats from '../data/summary_stats.json'

function SummaryStats() {
    const cards = [
        { label: 'Total Revenue', value: `£${stats.totalRevenue.toLocaleString()}` },
        { label: 'Total Orders', value: stats.totalOrders.toLocaleString() },
        { label: 'Total Customers', value: stats.totalCustomers.toLocaleString() },
        { label: 'Avg Order Value', value: `£${stats.avgOrderValue.toLocaleString()}` },
        { label: 'Repeat Customer Rate', value: `${stats.repeatRate}%` },
    ]

    return (
        <div className="stats-row">
            {cards.map((card) => (
                <div className="stat-card" key={card.label}>
                    <p className="stat-label">{card.label}</p>
                    <p className="stat-value">{card.value}</p>
                </div>
            ))}
        </div>
    )
}

export default SummaryStats