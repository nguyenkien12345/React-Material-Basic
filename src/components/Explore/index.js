import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './style.css'

const tourists = [
    {
        name: "Hotels",
        icon: "hotel",
        desc: "A hotel is an establishment that provides paid lodging on a short-term basis"
    },
    {
        name: "Restaurant",
        icon: "restaurant",
        desc: "A restaurant (French: [ʁɛstoʁɑ̃] ), or an eatery, is a business that prepares and serves food and drinks to customers"
    },
    {
        name: "Cafe",
        icon: "local_cafe",
        desc: "A café is a small restaurant or coffeehouse. A cafe is a small, cheap eatery or diner, sometimes called a 'greasy spoon'"
    },
    {
        name: "Shopping",
        icon: "shopping_basket",
        desc: "A shopping center (American English) or shopping centre (Commonwealth English), also called a shopping complex, shopping arcade, shopping plaza or galleria, is a group of shops built together, sometimes under one roof"
    }
];


export default function Explore() {
    return (
        <section id="explore" className="section section-explore grey lighten-4 center scrollpy">
            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="purple-text darken-1">Explore</span> NTKLFC
                    </h4>
                    {/* Màn hình máy tính hiển thị 4 cột, điện thoại 2 cột */}
                    {tourists.map((item,index) => {
                        return(
                            <div key={index} className="col s6 m3">
                                <div className="card-panel">
                                    <i className="material-icons medium purple-text">{item.icon}</i>  
                                    <h4>{item.name}</h4> 
                                    <p>{item.desc}</p> 
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
