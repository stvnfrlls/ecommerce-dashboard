import { lazy, Suspense } from 'react'
import './App.css'

const MonthlyRevenueChart = lazy(() => import('./components/MonthlyRevenueChart'))
const TopProductsChart = lazy(() => import('./components/TopProductsChart'))
const RevenueByCountryChart = lazy(() => import('./components/RevenueByCountryChart'))
const TopCustomersChart = lazy(() => import('./components/TopCustomersChart'))
const TopInvoicesTable = lazy(() => import('./components/TopInvoicesTable'))
const SummaryStats = lazy(() => import('./components/SummaryStats'))

function App() {
  return (
    <div className="App">
      <h1>E-Commerce Sales Dashboard</h1>
      <p className="dashboard-subtitle">
        Analysis of 800,000+ transactions from a UK-based online retailer (2010), covering revenue trends,
        top products, customer purchasing patterns, and geographic sales distribution.
      </p>
      <div className="dashboard-grid">
        <Suspense fallback={<div>Loading...</div>}>
          <SummaryStats />
        </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <TopCustomersChart />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <TopInvoicesTable />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App