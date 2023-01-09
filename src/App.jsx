import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import httpClient from './helpers/httpClient'

function App() {
    const [count, setCount] = useState(0)
    let handleSubmit = async (e) => {
        e.preventDefault()
        var data = JSON.stringify({
            vuaId: '9987600003@dashboard-aa-uat',
            templateName: 'ONETIME',
            trackingId: '123456',
            redirectionUrl: 'http://localhost:5173/',
            fipIds: [],
        })
        httpClient({
            url: 'init/redirection',
            method: 'POST',
            data: data,
            mode: 'no-cors',
        }).then((response) => {
            console.log(response.data)
            localStorage.setItem('refId', response.data.referenceId)

            localStorage.setItem('trackId', response.data.trackingId)
            window.location.replace(response.data.redirectionUrl)
        })
    }

    let handleSubmi = async (e) => {
        e.preventDefault()
        var data = ''
        var trackingId = 123456
        var referenceId = localStorage.getItem('refId')
        var uri =
            'consent/status?trackingId=' +
            trackingId +
            '&referenceId=' +
            referenceId
        console.log(uri)
        httpClient({
            url: uri,
            method: 'GET',
            mode: 'no-cors',
        }).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <div className='App'>
            <button onClick={handleSubmit}>get consent</button>
            <button onClick={handleSubmi}>data</button>
        </div>
    )
}

export default App
