import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './style.css';

// img, alt là props nhận về
const Photo = ({img, alt}) => {
    return(
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} />
        </div>
    )
};

class PhotoGallery extends Component{

    state = {
        photo: [
            {
                id: 1,
                img: "https://source.unsplash.com/1600x900/?hotel",
                alt: 'hotel'
            },
            {
                id: 2,
                img: "https://source.unsplash.com/1600x900/?restaurant",
                alt: 'restaurant'
            },
            {
                id: 3,
                img: "https://source.unsplash.com/1600x900/?natural",
                alt: 'natural'
            },
            {
                id: 4,
                img: "https://source.unsplash.com/1600x900/?beach",
                alt: 'beach'
            },
            {
                id: 5,
                img: "https://source.unsplash.com/1600x900/?travel",
                alt: 'travel'
            },
            {
                id: 6,
                img: "https://source.unsplash.com/1600x900/?city",
                alt: 'city'
            },
            {
                id: 7,
                img: "https://source.unsplash.com/1600x900/?adventure",
                alt: 'adventure'
            },
            {
                id: 8,
                img: "https://source.unsplash.com/1600x900/?sea",
                alt: 'sea'
            },
            {
                id: 9,
                img: "https://source.unsplash.com/1600x900/?building",
                alt: 'building'
            },
            {
                id: 10,
                img: "https://source.unsplash.com/1600x900/?climbing",
                alt: 'climbing'
            },
            {
                id: 11,
                img: "https://source.unsplash.com/1600x900/?forest",
                alt: 'forest'
            },
            {
                id: 12,
                img: "https://source.unsplash.com/1600x900/?resort",
                alt: 'resort'
            }
        ]
    }

    render(){
    return(
        <div className="row">
            {this.state.photo.map((item) => {
                return(
                    <Photo key={item.id} img={item.img} alt={item.alt}/>
                )
            })}
        </div>
    )};
};

export default function Gallery() {
    return (
        <section id="gallery" className="section section-gallery scrollpy">
            <div className="container">
                <h4 className="center">
                    <span className="purple-text text-darken-1">Photo</span> Gallery
                </h4>
                <PhotoGallery/>
            </div>
        </section>
    )
}
