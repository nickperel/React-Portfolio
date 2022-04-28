import React from 'react';

function Footer(props) {
    return (
        <div class="footer-basic" id="contact-me">
            <footer>
              <div class="column"></div>
                <div class="social"><a href="https://www.instagram.com/nickperel/" target="_blank" rel='noreferrer'><i class="icon ion-social-instagram"></i></a><a href="https://www.linkedin.com/in/nick-perel/" target="_blank" rel='noreferrer'><i class="icon ion-social-linkedin"></i></a><a href="https://github.com/nickperel" target="_blank" rel='noreferrer'><i class="icon ion-social-github"></i></a></div>
                <ul class="list-inline">
                    <li><a href="mailto:nickperel@live.com">Email</a></li>
                    {/* <br /> */}
                    {/* <li>Cell: 732-690-2562</li> */}
                </ul>
                <p class="copyright">Perel's Professional Portfolio © 2022</p>
                
            </footer>
        </div>
    );
}

export default Footer;