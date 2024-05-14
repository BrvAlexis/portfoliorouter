import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
    return (
        <footer className="py-6 my-6 border-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <h4>Follow Me</h4>
            </div>
            <div className="col-12">
              <ul className="nav list-unstyled d-flex justify-content-center">
                <li className="ms-3">
                  <Link className="text-muted" to="//github.com/BrvAlexis" target="_blank">
                    <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-muted" to="//www.linkedin.com/in/alexbrv-31devweb" target="_blank">
                    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-muted" to="//twitter.com/yourusername" target="_blank">
                    <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-muted" to="//www.youtube.com/c/yourchannelname" target="_blank">
                    <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;