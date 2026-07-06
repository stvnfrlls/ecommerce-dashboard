import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import topCustomers from '../data/top_customers.json'

function TopCustomersChart() {
    return (
        <div className="chart-card">
            <h2>Top 10 Customers by Quantity Purchased</h2>
            <p className="chart-caption">The customers who purchased the highest total quantity of items in 2010.</p>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topCustomers} layout="vertical" margin={{ left: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
                    <YAxis type="category" dataKey="Customer ID" width={80} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="Quantity" fill="#10b981" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TopCustomersChart