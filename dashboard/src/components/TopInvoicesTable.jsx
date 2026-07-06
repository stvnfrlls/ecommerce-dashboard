import qtyPerInvoice from '../data/qty_per_invoice.json'

function TopInvoicesTable() {
    return (
        <div className="chart-card">
            <h2>Top 10 Largest Single Orders</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
                        <th style={{ padding: '8px' }}>Customer ID</th>
                        <th style={{ padding: '8px' }}>Invoice</th>
                        <th style={{ padding: '8px', textAlign: 'right' }}>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {qtyPerInvoice.map((row, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '8px' }}>{row['Customer ID']}</td>
                            <td style={{ padding: '8px' }}>{row.Invoice}</td>
                            <td style={{ padding: '8px', textAlign: 'right' }}>{row.Quantity.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TopInvoicesTable