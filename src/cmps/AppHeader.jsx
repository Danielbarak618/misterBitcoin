import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../assets/imgs/home.png'
import users from '../assets/imgs/users.png'
import stats from '../assets/imgs/increase.png'

export  function AppHeader() {
    return (
        <div className="app-header">
            
        <nav>
           <NavLink exact to="/"><img className="img-icon" src={home}/></NavLink>     
           <NavLink exact to="/contacts"><img className="img-icon" src={users}/></NavLink>     
           <NavLink exact to="/stats"><img className="img-icon" src={stats}/></NavLink>     
        </nav>
        </div>
    )
}
