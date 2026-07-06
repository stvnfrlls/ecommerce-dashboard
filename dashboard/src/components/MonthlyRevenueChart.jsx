import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import monthlyRevenue from '../data/monthly_revenue.json'

function MonthlyRevenueChart() {
    return (
        <div className="chart-card">
            <h2>Revenue by Month - 2010</h2>
            <p className="chart-caption">Total revenue generated each month, showing seasonal demand patterns.</p>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Month" />
                    <YAxis tickFormatter={(value) => value.toLocaleString()} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="Revenue" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MonthlyRevenueChart