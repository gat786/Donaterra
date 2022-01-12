import React from 'react'

import "custom-components/custom-components.scss";

export default function Navbar() {
    return (
        <nav className='nav-row'>
            <div className=''>
                <h1 className='poppins title'>Donaterra</h1>
                <span>Crypto donations</span>
            </div>

            <div className='nav-card'>
                <div>How it works</div>
                <div>Start a Fundraiser</div>
                <div>Browse Fundraisers</div>
            </div>

            <div className='text-xl text-center font-semibold'>
                Connect <br /> Wallet
            </div>
        </nav>
    )
}
