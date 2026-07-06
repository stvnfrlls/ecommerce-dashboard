import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import revenueByCountry from '../data/revenue_by_country.json'

function RevenueByCountryChart() {
    const withoutUK = revenueByCountry.filter(row => row.Country !== 'United Kingdom')

    return (
        <div className="chart-card">
            <h2>Revenue by Country (Top 10)</h2>
            <p className="chart-caption">Revenue concentration by country, led heavily by the UK home market.</p>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueByCountry} layout="vertical" margin={{ left: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
                    <YAxis type="category" dataKey="Country" width={100} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="Revenue" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>

            <h2>Revenue by Country (Excluding UK)</h2>
            <p className="chart-caption">Same data with the UK removed, to surface the next-largest international markets.</p>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={withoutUK} layout="vertical" margin={{ left: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
                    <YAxis type="category" dataKey="Country" width={100} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="Revenue" fill="#f97316" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RevenueByCountryChart