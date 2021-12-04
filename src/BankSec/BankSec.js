import React from 'react'
import BankSecCss from './BankSec.module.css'
import bankimg from '../asset/case-study-img2.png'
export default function BankSec() {
    return (
        <>

<section className={`${BankSecCss['Study-section']}`}>
             
                <div className={`${BankSecCss['row-study']}`}>
                    <div className={`${BankSecCss.col1}`}>
                        <h4> E BANKS THAT ACCEPT US CASINO PLAYERS</h4>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euiyd tincidunt ut laoreet dolore magna aliquam nibh utpat.Ullamcorper suscipit lobo nibh euiyd tinci- dunt ut laoreet.</p>
                        <p className={`${BankSecCss.lastp}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem impedit molestias cumque dolorum, sunt, provident blanditiis tempora, aut explicabo error ipsa repudiandae. Dolores eius eaque eum mollitia esse nisi necessitatibus distinctio ea, dolorem non, optio minima temporibus blanditiis, quidem aperiam!</p>
                        <a href="#">View More </a>
                    </div>
                    <div className={`${BankSecCss.col2}`}>
                        <img src={bankimg} alt="study" />
                    </div>
                </div>
            </section>

            
        </>
    )
}


