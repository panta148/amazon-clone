import React from 'react'
import './Home.css'
function Home() {
    return (
        
        <div className='home'>
            <img src={process.env.PUBLIC_URL + "/images/banner1.jpg"} className='homeimage' alt="" />
        </div>
    )
}

export default Home
