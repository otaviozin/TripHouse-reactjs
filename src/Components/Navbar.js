import React from "react";

function Navbar(props){

    let ClassName = "nav-link "

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 fw-bold fs-6">
            <div className="container">
                <a className="navbar-brand" href="/">Trip House</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className={ClassName + props.about} href="/#about">Sobre</a>
                        <a className={ClassName + props.contact} href="/#contact">Contato</a>
                        <a className={ClassName + props.rent} href="/rent">Alugar</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;