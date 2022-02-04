import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../Images/view1.jpeg';
import Img2 from '../../Images/view2.jpeg';
import Img3 from '../../Images/view3.jpeg';
import './style.css';

const Infomartion = [
    {
        name: "Pick Your Destination",
        img: Img1,
        desc: "Anh 1",
        content: "Đi nhiều khiến kẻ khôn càng khôn hơn, kẻ khờ càng khờ tệ hại",
        align: "caption center-align"
    },
    {
        name: "Book Your Trip",
        img: Img2,
        desc: "Anh 2",
        content: "Tri thức về quá khứ và về địa danh là vật trang trí và thực phẩm của trí tuệ con người",
        align: "caption left-align"
    },
    {
        name: "Relax And Enjoy",
        img: Img3,
        desc: "Anh 3",
        content: "Thôi thúc muốn có những chuyến đi là một trong những dấu hiệu đầy hi vọng của sự sống",
        align: "caption right-align"
    }
]

export default function Banner() {
    return (
        <section className="slider" id="home">
            <ul className="slides">
                {Infomartion.map((item, index) => {
                    return(
                        <li key={index}>
                            <img src={item.img} alt={item.desc}/>
                            <div className={item.align}>
                                <h2>{item.name}</h2>
                                <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                    {item.content}
                                </h5>
                                <Link to="#" className="btn btn-large purple">Learn More</Link>
                            </div>
                        </li> 
                    )
                })}
            </ul>
        </section>
    )
}

// Lý thuyết
// - hide-on-small-only: (Responsive) Ẩn khi kích thước màn hình là di động (Nằm trong Helpers) 
