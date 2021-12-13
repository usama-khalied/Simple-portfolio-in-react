import React from 'react'
import Image1 from '../asset/client-logo-2.png'
import Image2 from '../asset/client-logo-2.png'
import Image3 from '../asset/client-logo-3.png'
import Image4 from '../asset/client-logo-4.png'
import Image5 from '../asset/client-logo-5.png'
import Image6 from '../asset/client-logo-6.png'


import CompanyCss from './Company.module.css'
export default function Company() {
    return (
<>
<section className={`${CompanyCss.Company}`}>
    <div className={`${CompanyCss.comprow}`}>
<div className={`${CompanyCss.box}`}> <img src={Image1} alt='img'/></div>
<div className={`${CompanyCss.box}`}> <img src={Image2} alt='img'/></div>
<div className={`${CompanyCss.box}`}> <img src={Image3} alt='img'/></div>
<div className={`${CompanyCss.box}`}> <img src={Image4} alt='img'/></div>
<div className={`${CompanyCss.box}`}> <img src={Image5} alt='img'/></div>
<div className={`${CompanyCss.box}`}> <img src={Image6} alt='img'/></div>
</div>
</section>




</>
    )
}
