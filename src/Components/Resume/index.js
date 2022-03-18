import React from 'react';

function Resume() {
    return (
        <div className="container">
            <a href='https://drive.google.com/file/d/1MJlzD45B7mdkQdg9GQGO9PLmKxm5Pudt/view?usp=sharing'>Link to Resume Here</a>
            <h1 className='d-flex justify-content-center'>Proficiencies</h1>
                <div className='ul-container d-flex justify-content-between'>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Express.js</li>
                    </ul>
                    <ul>
                        <li>GraphQl</li>
                        <li>MongoDB</li>
                        <li>CSS/Bootstrap</li>
                    </ul>
                    <ul>
                        <li>One Thing</li>
                        <li>One Thing</li>
                        <li>One Thing</li>
                    </ul>
                </div>
        </div>
    );
}

export default Resume;