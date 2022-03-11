import React from 'react';

function MyWork(props) {
    return (
        <section id="work">
            <h2 id="work-title">My Work</h2>
            <div class="column"></div>
            <div id="work-imgs-container" class="main-section-content">
                <a href="https://ahoward21.github.io/pokemon-search/" id="work-main-img">
                    <div class="big-box-1">
                        <div class="pic-label">
                            <h3>Poké-Find Website</h3>
                        </div>
                    </div>
                </a>
                <a href="https://sneaker-sniper.herokuapp.com/" id="work-main-img">
                    <div class="big-box-2">
                        <div class="pic-label">
                            <h3>Sneaker Sniper Website</h3>
                        </div>
                    </div>
                </a>
                <a class="click-container" href="https://nickperel.github.io/run-buddy/">
                    <div class="half-box" id="half-box1">
                        <div class="pic-label">
                            <h3>Run Buddy Website</h3>
                        </div>
                    </div>
                </a>
                <a class="click-container" href="https://nickperel.github.io/JavaScript-Password-Generator/">
                    <div class="half-box" id="half-box2">
                        <div class="pic-label">
                            <h3>JavaScript Password Generator</h3>
                        </div>
                    </div>
                </a>
                <a class="click-container" href="https://nickperel.github.io/Web-API-Code-Quiz/">
                    <div class="half-box" id="half-box3">
                        <div class="pic-label">
                            <h3>Web-API-Code-Quiz Website</h3>
                        </div>
                    </div>
                </a>
                <a class="click-container" href="https://nickperel.github.io/work-day-scheduler/">
                    <div class="half-box" id="half-box4">
                        <div class="pic-label">
                            <h3>Work Day Scheduler Website</h3>
                        </div>
                    </div>
                </a>
            </div>
                
        </section>
    );
}

export default MyWork;