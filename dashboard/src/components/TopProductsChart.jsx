import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import topProducts from '../data/top_products.json'

function TopProductsChart() {
    return (
        <div className="chart-card">
            <h2>Top 10 Best-Selling Products by Revenue</h2>
            <p className="chart-caption">Products ranked by total revenue, excluding non-product line items like postage.</p>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={topProducts} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
                    <YAxis type="category" dataKey="Product" width={220} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="Revenue" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TopProductsChart