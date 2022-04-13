import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpeg'
import './style.css';

function About(props) {
    return (
        <>
            <section id="header-img">
                <h2>
                    Let's See What We Can Accomplish Together!
                </h2>
            </section>

            <section id="about">
                <div className='about-pic'>
                    <h2 id="about-title">About Me</h2>
                    <img src={profilePic} alt='profile-pic'className='profile-pic'/>
                </div>
                <div class="column">

                </div>
                <div class="main-section-content">
                    <p class="about-p">
                    Performance-driven, conscientious, hard-working recent graduate seeking entry level software engineer, web developer, or software tester roles. Extensive knowledge of JavaScript and React, and experience with both front-end and back-end development. If I'm not coding, you can find me playing basketball, gaming, or playing with my cat who constantly wants to lay on my keyboard.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;