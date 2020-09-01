import React from 'react';
import './SwipeButtons.css'
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton"
/**
* @author
* @function SwipeButtons
**/

const SwipeButtons = (props) => {
  return(
    <div className = "swipebuttons">
        <ReplayIcon fontSize = 'large' />
        <CloseIcon fontSize='large' />
        <StarRateIcon fontSize = 'large'/>
        <Favorite fontSize = 'large' /> 
        <FlashOnIcon fontSize = 'large' />
    </div>
   )

 }

export default SwipeButtons