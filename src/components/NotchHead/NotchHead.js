import React from 'react'
import "./NotchHead.css"

const NotchHead = (props) => {
    return (
        <div class="logo-wrap">
            <div class="rect-left">
              	<div class="inner inner-left"></div>
            </div>
            <div class="rect">&nbsp;<span class="circle"></span>
              	<div class="crypto-logo"><img className='crypto-img' src={props.logo} alt="" /></div>
            </div>
            <div class="rect-right">
              	<div class="inner inner-right"></div>
            </div>
        </div>
    )
}

export default NotchHead