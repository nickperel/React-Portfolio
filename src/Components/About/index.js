import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpeg'
import './style.css';

function About(props) {
    return (
        <>
            <section id="header-img">
                <h2>
                    We're Just Getting Started, Buckle Up!
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
                    Ambitious web developer eager to grow my knowledge, experience, and skill-sets as a software engineer on the path to reaching my full potential. Hard worker, creative thinker, strong team player, effective communicator, and open to guidance and constructive feedback for continued growth and added value to your team. Knowledge focusing primarily in JavaScript and React, and experience with both front-end and back-end development.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;