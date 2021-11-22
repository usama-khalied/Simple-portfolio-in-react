import React , {useEffect} from 'react';
import HeroSecCss from './HeroSec.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
export const HeroSec = () => {
    useEffect(() => {
Aos.init({duration : 2000});
    }, []);
    return (

    <>

<section  className={`${HeroSecCss['hero-sec']}`}>
<div className={`${HeroSecCss['hero-text']}`}>
<h1 data> We’re Creative <br/>
We Ensure Quality Design</h1>

</div>
</section>
         

        </>
    )
}

