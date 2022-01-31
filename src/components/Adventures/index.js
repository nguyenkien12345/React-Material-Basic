import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../Images/newyork2.jpeg';
import Img2 from '../../Images/phuquoc.jpg';
import Img3 from '../../Images/brazil.jpeg';
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

const countries = [
    {
        name: "New York",
        img: Img1,
        desc: 'New York City, often simply called New York, is the most populous city in the United States'
    },
    {
        name: "Phú Quốc",
        img: Img2,
        desc: 'Phú Quốc is the largest island in Vietnam. Phú Quốc and nearby islands, along with the distant Thổ Chu Islands, are part of Kiên Giang Province as Phú Quốc City, the island has a total area of 574 km² and a permanent population of approximately 179,480 people'
    },
    {
        name: "Brazil",
        img: Img3,
        desc: 'Brazil , officially the Federative Republic of Brazil, is the largest country in both South America and Latin America'
    },
];

export default function Adventures() {
    return (
        <section id="adventure" className="section section-adventure yellow accent-1 center scrollpy">
            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="purple-text darken-1">NTKLFC</span> Adventure
                    </h4>
                    {/* Màn hình máy tính hiển thị 3 cột, điện thoại 1 cột */}
                    {countries.map((item,index) => {
                        return(
                            <div key={index} className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={item.img} alt={item.name}/>
                                        <span className="card-title">{item.name}</span>
                                        <Link className="btn-floating activator halfway-fab waves-light purple"><i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{item.name}<i className="material-icons right">close</i></span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
