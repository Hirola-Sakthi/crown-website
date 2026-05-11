import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// IMPORTANT: webflow.css must come BEFORE globals.css so Tailwind's preflight
// in globals.css doesn't clobber Webflow's typography rules. (And separating
// the imports avoids Vite's "@import must precede all other statements" error.)
import './styles/webflow.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
