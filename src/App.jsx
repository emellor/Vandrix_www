import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import WattGuardPage from './pages/WattGuardPage'
import VandrixIsoPage from './pages/VandrixIsoPage'
import VandrixSensePage from './pages/VandrixSensePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/wattguard" element={<WattGuardPage />} />
        <Route path="/vandrix-iso" element={<VandrixIsoPage />} />
        <Route path="/vandrix-sense" element={<VandrixSensePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
