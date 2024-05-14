import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                
                <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src="/files/favicon.png" alt="MonApp" style={{ maxWidth: '30px', maxHeight: '30px', marginRight: '10px' }} />
                </Link>
                <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"> 
                    <Link className="text-muted" to="//github.com/BrvAlexis" target="_blank">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
                    </Link>
                </li>
                
            </ul>
        </footer>
    );
}

export default Footer;