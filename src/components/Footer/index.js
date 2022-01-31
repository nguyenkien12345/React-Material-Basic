import React from 'react';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import './style.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="section section-footer purple white-text center">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4>Follow Us</h4>
                        <p>Check out social media for special offers</p>
                        <Link to="https://facebook.com" target="blank">
                            <i class="fa fa-facebook fa-3x facebook"></i>
                        </Link>
                        <Link to="https://twitter.com" target="blank">
                            <i class="fa fa-twitter fa-3x twitter"></i>
                        </Link>
                        <Link to="https://google-plus.com" target="blank">
                            <i class="fa fa-google-plus fa-3x google-plus"></i>
                        </Link>
                        <Link to="https://linkedin.com" target="blank">
                            <i class="fa fa-linkedin fa-3x linkedin"></i>
                        </Link>
                        <Link to="https://pinterest.com" target="blank">
                            <i class="fa fa-pinterest fa-3x pinterest"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {/*Tham khảo: https://materializecss.com/floating-action-button.html */}
                    <div className="fixed-action-btn">
                        <Link className="btn-floating btn-large blue">
                            <i className="large material-icons">mode_edit</i>
                        </Link>
                        <ul>
                            <li><Link className="btn-floating red"><i className="material-icons">insert_chart</i></Link></li>
                            <li><Link className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></Link></li>
                            <li><Link className="btn-floating green"><i className="material-icons">publish</i></Link></li>
                            <li><Link className="btn-floating blue"><i className="material-icons">attach_file</i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
