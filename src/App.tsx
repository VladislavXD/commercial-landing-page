import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/memberships"
        element={<LandingPage initialSection="memberships" />}
      />
      <Route path="/gallery" element={<LandingPage initialSection="gallery" />} />
      <Route path="/trainers" element={<LandingPage initialSection="why" />} />
      <Route path="/contact" element={<LandingPage initialSection="contact" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
