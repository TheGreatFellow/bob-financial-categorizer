import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import httpClient from './helpers/httpClient'
import { Link } from 'react-router-dom'

function App() {
    const [count, setCount] = useState(0)
    let handleSubmit = async (e) => {
        e.preventDefault()
        var data = JSON.stringify({
            vuaId: '9987600001@dashboard-aa-uat',
            templateName: 'ONETIME',
            trackingId: '123456',
            redirectionUrl: 'https://bob-financial-categorizer.vercel.app',
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
        <>
            <header className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='logo'>Finanzi</h1>
                </div>
                <div className='navbar-links'>
                    <Link to='/dashboard'>
                        <a href='#'>Dashboard</a>
                    </Link>
                    <Link to='/freelancers'>
                        <a href='#'>For FIU's</a>
                    </Link>
                    <Link to='/clients'>
                        <a href='#'>For FIP's</a>
                    </Link>
                </div>
                {/* <div className='world-id'>
                    <button>get consent</button>
                </div> */}
                <button onClick={handleSubmit}>
                    <div class='svg-wrapper-1'>
                        <div class='svg-wrapper'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'
                            >
                                <path fill='none' d='M0 0h24v24H0z'></path>
                                <path
                                    fill='currentColor'
                                    d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Login</span>
                </button>
            </header>
            <div className='home-container'>
                <section className='hero'>
                    <div className='hero-left-area'>
                        <div className='hero-heading-section'>
                            <h1 className='hero-heading'>
                                Powerful Insights
                                <br />
                                <span className='framed'> With AA Data</span>
                                <br />
                            </h1>
                        </div>
                        <div className='hero-subheading'>
                            Get In-depth analysis and insights of all your
                            financial history for the benefit of Customer as
                            well as your financial institution.
                        </div>
                    </div>
                    <div className='hero-right-area'>
                        <div className='grid'>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'>
                                {' '}
                                <img
                                    src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/ad3266132422411.61a89f38793a5.jpg'
                                    alt='flamingo'
                                    width='150px'
                                    height='150px'
                                    className='flamingo'
                                />
                            </div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'>
                                <div className='long-rectangle'>
                                    Introduction of Account Aggregators has
                                    given a portal to financial information
                                    which was never available before. We aim to
                                    harness this tech to the fullest.
                                </div>
                            </div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <br />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
