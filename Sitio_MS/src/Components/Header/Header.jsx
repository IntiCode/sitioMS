import React from 'react'
import Nav from './../Nav/Nav';

const Header = () => {
    return (
        <>
            <div style={{ backgroundColor: '#333', padding: '10px', color: '#fff', position: 'sticky', top: 0, zIndex: 1000 }} >
                Header

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <div>
                        <Nav />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header