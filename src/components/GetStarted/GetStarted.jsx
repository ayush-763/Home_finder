import React from 'react'
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>
                    Subscriber to find super attractive price quotes from different sellers
                    <br></br>
                    Find your residence soon.
                </span>
                <button className='button'>
                    <a href="mailto: ayushchikate2003@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted