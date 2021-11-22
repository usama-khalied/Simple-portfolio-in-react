import React , {useState} from 'react'
import logo from '../asset/logo-yellow.png'
import HeaderCss from './Header.module.css'
export const Header = () => {
    const [header, setheader] = useState(false);
const changeBackground = () => {
    
}
window.addEventListener("scroll", changeBackground);



    return (
    <>

<header className="header">
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

