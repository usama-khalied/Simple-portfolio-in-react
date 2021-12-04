import React from 'react'
import studyimage from '../asset/case-study-img1.png'
import StudyCss from './StudySec.module.css'
export default function Studysec() {
    return (
        <>
            <section className={`${StudyCss['Study-section']}`}>
                <div className={`${StudyCss.studytext}`}>
                    <h1> Case Study</h1>
                    <small> </small>
                </div>
                <div className={`${StudyCss['row-study']}`}>
                    <div className={`${StudyCss.col1}`}>
                        <h4> E BANKS THAT ACCEPT US CASINO PLAYERS</h4>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euiyd tincidunt ut laoreet dolore magna aliquam nibh utpat.Ullamcorper suscipit lobo nibh euiyd tinci- dunt ut laoreet.</p>
                        <p className={`${StudyCss.lastp}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem impedit molestias cumque dolorum, sunt, provident blanditiis tempora, aut explicabo error ipsa repudiandae. Dolores eius eaque eum mollitia esse nisi necessitatibus distinctio ea, dolorem non, optio minima temporibus blanditiis, quidem aperiam!</p>
                        <a href="#">View More </a>
                    </div>
                    <div className={`${StudyCss.col2}`}>
                        <img src={studyimage} alt="study" />
                    </div>
                </div>
            </section>


        </>
    )
}
