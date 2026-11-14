import { lazy, Suspense } from 'react'
import SummaryStats from './components/SummaryStats'
import './App.css'

const MonthlyRevenueChart = lazy(() => import('./components/MonthlyRevenueChart'))
const TopProductsChart = lazy(() => import('./components/TopProductsChart'))
const RevenueByCountryChart = lazy(() => import('./components/RevenueByCountryChart'))
const TopCustomersChart = lazy(() => import('./components/TopCustomersChart'))
const TopInvoicesTable = lazy(() => import('./components/TopInvoicesTable'))

function PanelLoading() {
  return <div className="panel panel-loading" role="status"><span>Loading analysis…</span><div /><div /><div /></div>
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to dashboard</a>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#overview" aria-label="Retail analytics overview">
            <svg className="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="currentColor" />
              <path d="M9 22V17M16 22V10M23 22V14" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span>Retail<span className="brand-secondary"> / Analytics</span></span>
          </a>
          <nav aria-label="Dashboard sections">
            <a href="#overview">Overview</a>
            <a href="#products">Products & markets</a>
            <a href="#customers">Customers & orders</a>
          </nav>
          <span className="header-note">Online Retail II</span>
        </div>
      </header>

      <main id="main" className="dashboard">
        <section className="dashboard-header" id="overview" aria-labelledby="dashboard-title">
          <div>
            <h1 id="dashboard-title">Sales overview<span className="title-dot">.</span></h1>
            <p className="dashboard-subtitle">Revenue, products, and purchasing patterns across 800,000+ transactions from a UK-based online retailer.</p>
          </div>
          <div className="report-period">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18" /></svg>
            <div><span>Summary period</span><strong>Jan – Dec 2010</strong></div>
          </div>
        </section>

        <SummaryStats />

        <div className="dashboard-grid">
          <Suspense fallback={<PanelLoading />}><MonthlyRevenueChart /></Suspense>
          <div className="dashboard-grid-2col" id="products">
            <Suspense fallback={<PanelLoading />}><TopProductsChart /></Suspense>
            <Suspense fallback={<PanelLoading />}><RevenueByCountryChart /></Suspense>
          </div>
          <div className="dashboard-grid-2col" id="customers">
            <Suspense fallback={<PanelLoading />}><TopCustomersChart /></Suspense>
            <Suspense fallback={<PanelLoading />}><TopInvoicesTable /></Suspense>
          </div>
        </div>

        <footer className="dashboard-footer">
          <div><strong>E-Commerce Sales Dashboard</strong><p>Built by Client Steven S. Frilles <span aria-hidden="true">·</span> <a href="https://github.com/stvnfrlls" target="_blank" rel="noopener noreferrer">GitHub</a> <span aria-hidden="true">/</span> <a href="https://stvnfrlls.github.io/myPortfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></p></div>
          <p>Dataset: <a href="https://archive.ics.uci.edu/dataset/502/online+retail+ii" target="_blank" rel="noopener noreferrer">Online Retail II, UCI</a><br /><span>Historical analysis · Values in GBP</span></p>
        </footer>
      </main>
    </>
  )
}

export default App
