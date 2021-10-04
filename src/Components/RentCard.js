import React from "react";

import data from "../data/houses.json";

function RentCard(){
    return(
        <div className="container">
            <div className="row">
            {data.map(houses => (
                <div className="col-md-6 col-lg-4 mt-lg-5 mt-4 d-flex justify-content-center">
                    <div className="card h-100 card-width">
                        <img src={houses.image} className="card-img-top card-img-cover" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{houses.name}</h5>
                            <p className="card-text">{houses.description}</p>
                            <p><span className="badge bg-coral text-dark">Quartos: {houses.bedrooms}</span></p>
                            <p><span className="badge bg-coral text-dark">Diária: R${houses.price}</span></p>
                            <a href="/success" className="btn btn-green">Alugar</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default RentCard;
