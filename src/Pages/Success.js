import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Success(){
    return(
        <div>
            <Navbar />
            <div className="bg-success text-light">
                <div className="container mt-4 p-5">
                    <div className="row d-flex justify-content-center text-center">
                        <h2>Tudo certo!</h2>
                        <p>Entraremos em contato com você em breve. Fique de olho no seu email e WhatsApp.</p>
                        <a className="btn btn-light w-50" href="/">Voltar ao início</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Success;