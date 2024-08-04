import React from 'react'
import './landing.css'
import moofliLanding from '../images/moofli-landing.png'
import skillop from '../images/skillop.png'
import moofliLogin from '../images/moofli-login.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing-page'>
      <div className='header'>

        <div className='logo-title'>
          <div className='logo-image'>
            <img src={skillop} className='skillop-img'/>
          </div>
          <div className='moofli-txt'>
            MOOFLI
          </div>
        </div>
        <Link to="/mlogin">
        <div className='login-container'>
          <div className='login-txt-container'>
            <div className='login-txt'>
              
                Log in
              
            </div>
          </div>
          <div className='login-image'>
            <img src={moofliLogin} className='moofli-login-img'/>
          </div>
        </div>
        </Link>
      </div>
      
      <div className='tab-to-learn-st-container'>
        <div className='tab-to-learn-st'>
          you are using the free version of the app. Tap to learn more.
        </div>
      </div>

      <div className='main-body-container'>

        <div className='head-line-container'>
          <div className='head-line-txt'>
            where minds crunch together just like peanuts
          </div>          
        </div>

        <div className='sign-in-statement-container'>
          <div className='sign-in-statement'>
            Sign in to write your first diary
          </div>          
        </div>

        <div className='sign-in-button-container'>
          <div className='sign-in'>
            Sign in 
          </div>
        </div>

      </div>

      <div className='background-landing-image-container'>
        <img src={moofliLanding} className='background-landing-image'/>
      </div>
      
    </div>
  )
}

export default Landing
