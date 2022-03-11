import React from 'react';

function Project({work}) {

    function renderWork () {
        if(work.id == null) {
            return (
                <a href={work.url} id="work-main-img">
                    <div class={work.class}>
                        <div class="pic-label">
                            <h3>{work.title}</h3>
                        </div>
                    </div>
                </a>
            )
        } else {
            return  <a class="click-container" href={work.url}>
            <div class={work.class} id={work.id}>
                <div class="pic-label">
                    <h3>{work.title}</h3>
                </div>
            </div>
        </a>
        }
    }

    return (
        <>
            {renderWork()}
        </>

       
    );
}

export default Project;