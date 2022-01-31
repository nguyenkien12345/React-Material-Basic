import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export default function Contact() {
    return (
        <section id="contact" className="section section-contact scrollpy">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col s12 m6">
                        <div className="card-panel purple white-text center">
                            <i className="material-icons medium">mail</i>
                            <h4>NTKLFC ADDRESS</h4>
                            <p className="grey-text darken-3 hide-on-small-only">Email giới thiệu doanh nghiệp là cách để công ty giới thiệu với khách hàng, đối tác, nhà phân phối, nhà đầu tư hoặc tổ chức khác,… về sản phẩm/dịch vụ mình cung cấp</p>
                        </div>
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Main Office</h4></li>
                            <li className="collection-item"><i className="fa fa-building">&nbsp; NTKLFC Booking</i></li>
                            <li className="collection-item"><i className="fa fa-map">&nbsp; 123 Checkout rd, California, US</i></li>
                            <li className="collection-item"><i className="fa fa-phone">&nbsp; (032) 123-4567</i></li>
                            <li className="collection-item"><i className="fa fa-envelope-open">&nbsp; booking@ntklfc.com</i></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col s12 m6">
                        <div className="card-panel grey lighten-3">
                            <h5 className="left-align">Please fill out this form</h5>
                            <form>
                                <div className="input-field">
                                    <input type="text" id="name" className="validate"/>
                                    <label for="name" className="purple-text">Name</label>
                                </div>
                                <div className="input-field">
                                    <input type="email" id="email" className="validate"/>
                                    <label for="email" className="purple-text">Email</label>
                                </div>
                                <div className="input-field">
                                    <input type="number" id="phone" className="validate"/>
                                    <label for="phone" className="purple-text">Phone</label>
                                </div>
                                <div className="input-field">
                                    <textarea type="text" id="message" className="materialize-textarea" data-length="120"></textarea>
                                    <label for="message" className="purple-text">Message</label>
                                </div>
                                <input type="submit" value="Submit" className="btn purple"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
