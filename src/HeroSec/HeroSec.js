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

<section  data-aos="fade-up" data-aos-anchor-placement="top-center" className={`${HeroSecCss['hero-sec']}`}>
<div className={`${HeroSecCss['hero-text']}`}>
<h1> We’re Creative <br/>
We Ensure Quality Design</h1>

</div>
</section>
         

        </>
    )
}

