import React from 'react';
import Project from '../Project';
import './style.css';

function Portfolio(props) {

    const workArr = [
        {
            url: 'https://sneaker-sniper.herokuapp.com/',
            title: 'Sneaker Sniper Website',
            github: 'https://github.com/nickperel/Sneaker-Sniper',
            class: 'big-box-1',
            id: null
        },
        {
            url: 'https://ahoward21.github.io/pokemon-search/',
            title: 'Poké-Find Website',
            github: 'https://github.com/Ahoward21/pokemon-search',
            class: 'big-box-2',
            id: null
        },
        {
            url: 'https://nickperel.github.io/run-buddy/',
            title: 'Run Buddy Website',
            github: 'https://github.com/nickperel/run-buddy',
            class: 'half-box',
            id: 'half-box1'
        },
        {
            url: 'https://nickperel.github.io/Weather-Wizard/',
            title: 'Weather Wizard Website',
            github: 'https://github.com/nickperel/Weather-Wizard',
            class: 'half-box',
            id: 'half-box2'
        },
        {
            url: 'https://warm-woodland-79829.herokuapp.com/',
            title: 'Budget Buddy Website',
            github: 'https://github.com/nickperel/Budget-Buddy',
            class: 'half-box',
            id: 'half-box3'
        },
        {
            url: 'https://glacial-castle-66844.herokuapp.com/',
            title: 'Tech Talk Website',
            github: 'https://github.com/nickperel/Tech-Talk',
            class: 'half-box',
            id: 'half-box4'
        }
    ];

    return (
        <>
        <section className='d-flex justify-content-center' id="header-img-partial"></section>
                <h2 className='d-flex justify-content-center' id="work-title">Portfolio</h2>
            <section id="work">
                <div class="column"></div>
                <div id="work-imgs-container" class="main-section-content">
                    {
                        workArr.map(work => {
                            return <Project work={work}/>
                        })
                    }
                </div>
                    
            </section>
        </>
    );
}

export default Portfolio;