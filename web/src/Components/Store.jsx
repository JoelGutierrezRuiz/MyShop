import React from "react";
import "../Styles/Store.css";
function Store (){

    const peticion = fetch("http://localhost:5000/bananitos",{
        method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
    })

    return(
        <div className="main__store">
            <ul className="store__list">
                <li className="store__list-item">
                    <p>Objeto 1</p>
                </li>
            </ul>
        </div>
    );
} 

export default Store;