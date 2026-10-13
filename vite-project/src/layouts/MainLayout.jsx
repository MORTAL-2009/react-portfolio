import Navbar from '../components/Navbar.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

function MainLayout({ children }) {
  return (
    <div className="site-layout">
      <Navbar />
      {children}
      <ScrollToTop />
    </div>
  )
}

export default MainLayout
