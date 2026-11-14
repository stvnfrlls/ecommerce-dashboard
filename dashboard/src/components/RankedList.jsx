function RankedList({ rows, valueLabel }) {
  const maximum = Math.max(...rows.map(row => row.value), 1)

  return (
    <ol className="ranked-list" aria-label={valueLabel}>
      {rows.map((row, index) => (
        <li className="ranked-row" key={row.label}>
          <span className="rank-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div className="rank-content">
            <div className="rank-label-line">
              <span className="rank-label">{row.label}</span>
              <span className="rank-value">{row.formattedValue}</span>
            </div>
            <div className="rank-track" aria-hidden="true">
              <div className="rank-bar" style={{ width: `${row.value / maximum * 100}%` }} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default RankedList
