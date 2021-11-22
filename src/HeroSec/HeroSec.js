import React from 'react'
import HeroSecCss from './HeroSec.module.css'
import { ScrollContainer , ScrollPage , Sticky , Animator} from 'react-scroll'
export const HeroSec = () => {
    return (
    <>
    <ScrollContainer>
        <ScrollPage page={0}>
            <Animator animation={Sticky()}> 
<section  className={`${HeroSecCss['hero-sec']}`}>
<div className={`${HeroSecCss['hero-text']}`}>
<h1> We’re Creative <br/>
We Ensure Quality Design</h1>

</div>
</section>
</Animator>
</ScrollPage>
</ScrollContainer>          

        </>
    )
}

