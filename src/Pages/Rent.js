import React from "react";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

function Rent(){
    return(
        <div>
            <Navbar rent="active"/>
            <div className="m-5 p-5 text-center">
                <h1>CALMA AMIGÃO</h1>
                <h2>EU AINDA NÃO FIZ ESSA PARTE</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Rent;