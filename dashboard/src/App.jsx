import { lazy, Suspense } from 'react'
import './App.css'

const MonthlyRevenueChart = lazy(() => import('./components/MonthlyRevenueChart'))
const TopProductsChart = lazy(() => import('./components/TopProductsChart'))
const RevenueByCountryChart = lazy(() => import('./components/RevenueByCountryChart'))

function App() {
  return (
    <div className="App">
      <h1>E-Commerce Sales Dashboard</h1>
      <div className="dashboard-grid">
        <Suspense fallback={<div>Loading...</div>}>
          <MonthlyRevenueChart />
        </Suspense>
        <div className="dashboard-grid-2col">
          <Suspense fallback={<div>Loading...</div>}>
            <TopProductsChart />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <RevenueByCountryChart />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App