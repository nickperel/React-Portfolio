import React from 'react';
import Project from '../Project';

function MyWork(props) {

    const workArr = [
        {
            url: 'https://ahoward21.github.io/pokemon-search/',
            title: 'Poké-Find Website',
            class: 'big-box-1',
            id: null
        },
        {
            url: 'https://sneaker-sniper.herokuapp.com/',
            title: 'Sneaker Sniper Website',
            class: 'big-box-2',
            id: null
        },
        {
            url: 'https://nickperel.github.io/run-buddy/',
            title: 'Run Buddy Website',
            class: 'half-box',
            id: 'half-box1'
        },
        {
            url: 'https://nickperel.github.io/JavaScript-Password-Generator/',
            title: 'Password Generator Website',
            class: 'half-box',
            id: 'half-box2'
        },
        {
            url: 'https://nickperel.github.io/Web-API-Code-Quiz/',
            title: 'Code Quiz Website',
            class: 'half-box',
            id: 'half-box3'
        },
        {
            url: 'https://nickperel.github.io/work-day-scheduler/',
            title: 'Work Day Scheduler Website',
            class: 'half-box',
            id: 'half-box4'
        }
    ]

    return (
        <section id="work">
            <h2 id="work-title">My Work</h2>
            <div class="column"></div>
            <div id="work-imgs-container" class="main-section-content">
                {
                    workArr.map(work => {
                        return <Project work={work}/>
                    })
                }
            </div>
                
        </section>
    );
}

export default MyWork;