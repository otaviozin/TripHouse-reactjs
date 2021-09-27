import React from "react";

import Navbar from "../Components/Navbar.js";
import RentCard from "../Components/RentCard.js";
import Footer from "../Components/Footer.js";

function Rent(){
    return(
        <div>
            <Navbar rent="active"/>
            <RentCard />
            <Footer />
        </div>
    );
}

export default Rent;