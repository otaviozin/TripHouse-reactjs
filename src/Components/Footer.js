import React from "react";

function Footer(){
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted mb-2 mb-md-1">© 2021 Otávio</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex fs-5">
                    <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://twitter.com/_otaviozin"><i className="fab fa-twitter"></i></a></li>
                    <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://github.com/otaviozin"><i className="fab fa-github"></i></a></li>
                    <li className="ms-3 text-muted"><i className="fab fa-discord me-2"></i>@otavio#0666</li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;