import React from 'react';

function Resume() {
    return (
        <div className="container resume-container">
            <button className="btn btn-info mt-5" href='https://drive.google.com/file/d/1Kax2iFRZAfOd4foBMLJWLxeS4dVDUrZB/view?usp=sharing'>Link to Resume Here</button>
            <h1 className='d-flex justify-content-center profs mb-5'>Proficiencies</h1>
                <div className='ul-container d-flex justify-content-between'>
                    <ul>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>State</li>
                        <br></br>
                    </ul>
                    <ul>
                        <li>MongoDB</li>
                        <li>HTML</li>
                        <li>CSS/Bootstrap</li>
                        <li>GraphQl</li>
                        <li>SQL</li>
                        <li>Model-View-Controller</li>
                    </ul>
                    <ul>
                        <li>Web APIs</li>
                        <li>Third Party APIs</li>
                        <li>Server-Side APIs</li>
                        <li>Object Oriented Programming</li>
                        <li>Progressive Web Applications</li>
                        <li>Leadership & Organizational Skills</li>
                    </ul>
                </div>
        </div>
    );
}

export default Resume;