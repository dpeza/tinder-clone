import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButtom from "@material-ui/core/IconButton"
/**
* @author
* @function Header
**/

const Header = () => {
  return(
    //learn BEM
    <div className="header">
        <IconButtom>
            <PersonIcon className = "header__icon" fontSize= "Large"/>
        </IconButtom>
        
        
        <img className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
        alt="tinder logo" 
        />
        <IconButtom>
            <ForumIcon className = "header__icon" fontSize = "Large"/>
        </IconButtom>
        
    </div>
   )

 }

export default Header