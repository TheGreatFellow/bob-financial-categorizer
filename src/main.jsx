import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import DashboardComponent from './Components/Dash'
import { ThemeProvider } from 'react-jss'
import Theme from './resources/theme'
import Dashboard from './Components/Dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/dashboard' element={<DashboardComponent />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
)
