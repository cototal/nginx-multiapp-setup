import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import One from './One.tsx'
import OneTwo from './OneTwo.tsx'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/one/two" element={<OneTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
