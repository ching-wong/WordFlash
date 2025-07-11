import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Game from './Game.jsx'
import Result from './Result.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
