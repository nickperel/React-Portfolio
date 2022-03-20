import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpeg'

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
                        My name is Nicholas Perel and I am an aspiring software engineer. In January of 2021, I received my
                        bachelor's degree from Rutgers University with a Major in Criminal Justice and a Double Minor in
                        Psychology and Political Science.
                        <br />
                        <br />
                        Following my graduation, I began to be trained in the art of Mindfulness Based Stress Reduction (MBSR),
                        receiving a certification of completion for an 8 week program in MBSR, as well as the completion of a 5
                        day silent retreat.
                        <br />
                        <br />
                        Mindfulness and meditation are both great passions of mine, but after many hours of contemplation on
                        what I really wanted to do with my life, I became aware of this Coding Bootcamp opportunity and decided
                        to give it a try. Now, here I am today, fully buckled in for the ride it will take to be able to secure
                        the title of Software Engineer for myself one day in the near future! :)
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;