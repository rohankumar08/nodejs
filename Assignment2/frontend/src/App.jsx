import './App.css'
import Header from './components/Heade'
import Work from './components/Work'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  )
}

export default App

