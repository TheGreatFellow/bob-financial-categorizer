import { WorldIDWidget } from '@worldcoin/id'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = ({ currentAccount, connectWalletHandler }) => {
    return (
        <>
            <header className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='logo'>zk Lancer</h1>
                </div>
                <div className='navbar-links'>
                    <Link to='/gigs'>
                        <a href='#'>Gigs</a>
                    </Link>
                    <Link to='/freelancers'>
                        <a href='#'>For Freelancers</a>
                    </Link>
                    <Link to='/clients'>
                        <a href='#'>For Clients</a>
                    </Link>
                </div>
                <div className='world-id'>
                    <button></button>
                </div>
            </header>
        </>
    )
}

export default NavBar
