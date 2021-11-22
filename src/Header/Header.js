import React from 'react'
import logo from '../asset/logo-yellow.png'
import HeaderCss from './Header.module.css'
export const Header = () => {
    return (
    <>

<header>
    <div className={`${HeaderCss.logo}`}>
        <img src={logo} alt="logo"/>    </div> 

<nav>
<ul>
    <li> <button> Home</button> </li>
    <li> <button> Service</button> </li>
    <li> <button> Portfolio</button> </li>
    <li> <button> Blog </button> </li>
    <li> <button> Contact</button> </li>


</ul>
<div className={`${HeaderCss.menu}`}>
 <button> <i className="fas fa-bars"></i></button> 

</div>
</nav>



    </header>            

        </>
    )
}

