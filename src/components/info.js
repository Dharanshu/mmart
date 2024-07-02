import React from 'react'
import './info.css'

export default function info() {
    return (
        <>
            <div data-aos="zoom-in-right" className="container-lg">
                <hr />


                <ul className="list-unstyled list-inline text-center" style={{cursor:"pointer"}}>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-3" href='https://web.whatsapp.com/' target='_blank'>
                            <i className="fab fa-facebook-f"> <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" height="50px" /></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-3" href='https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D' target='_blank'>
                            <i className="fab fa-twitter"> <img src="https://img.icons8.com/?size=512w&id=fJp7hepMryiw&format=png" height="50px" /></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-3" href='https://web.telegram.org/a/' target='_blank'>
                            <i className="fab fa-google-plus-g"> <img src="https://img.icons8.com/?size=512w&id=63306&format=png" height="50px" /></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-4" href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'>
                            <i className="fab fa-google-plus-g"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" height="50px" /></i>
                        </a>
                    </li>
                </ul>


            </div>

            <div className="container text-center text-md-left mt-5-lg" >

                <div className="row mt-3">

                    <div data-aos="fade-right" className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4-lg">

                        <h5 className="text-uppercase font-weight-bold-lg">M-Mart</h5>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>All kinds of cloths are available in our store.</p>
                        <p>All kinds of mens cloths ,jackets , hoodies are available </p>
                        <p>All kinds of womens cloths , lehangas ,cosmetis are available </p>

                    </div>

                    <div data-aos="fade-up" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h5 style={{cursor:"pointer"}} className="text-uppercase font-weight-bold">Cloths</h5>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <h5>
                            Mens Wears
                        </h5>
                        <ol style={{cursor:"pointer"}}>
                            <p>
                                <li style={{ listStyle: "none" }}>Jackets</li>
                            </p>
                            <p>
                                <li style={{ listStyle: "none" }}>hoodies</li>
                            </p>
                            <p>
                                <li style={{ listStyle: "none" }}>Sweaters</li>
                            </p>
                        </ol>
                        <ol style={{cursor:"pointer"}}>
                            <h5>
                                Women Wears
                            </h5>
                            <p>
                                <li style={{ listStyle: "none" }}>Lehangas</li>
                            </p>
                            <p>
                                <li style={{ listStyle: "none" }}>Punjabi suits</li>
                            </p>
                            <p>
                                <li style={{ listStyle: "none" }}>sarees</li>
                            </p>
                        </ol>
                    </div>

                    <div style={{cursor:"pointer"}} data-aos="fade-down" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h5 className="text-uppercase font-weight-bold">Connect with us</h5>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p >
                            <a style={{ textDecoration: "none", color: "black" }} href="https://www.instagram.com/_dharanshu_/" target="_blank">Instagram</a>
                        </p>
                        <p>
                            <a style={{ textDecoration: "none", color: "black" }} href="https://www.facebook.com/dharanshu" target="_blank">Facebook</a>
                        </p>
                        <p>
                            <a style={{ textDecoration: "none", color: "black" }} href="https://www.linkedin.com/in/dharanshu-kundal-8362ab158/" target="_blank">Linkedin</a>
                        </p>
                        <p>
                            <a style={{ textDecoration: "none", color: "black" }} href="https://mail.google.com/dharanshu1232@gmail.com" target="_blank">E.mail</a>
                        </p>


                    </div>

                    <div style={{cursor:"pointer"}} data-aos="fade-left" className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h5 className="text-uppercase font-weight-bold">Contact</h5>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <i className="fas fa-home mr-3"></i>Chajju Majra Rd, Sector 126, Sector 4, Greater Mohali, Model Town, Mundi Kharar, Punjab 140301 </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i>Mmart1232@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> +917986140715</p>
                    </div>
                </div>
            </div>
            <div style={{ color: "white" }} className="footer-copyright text-center py-3 bg-dark"> <span style={{ color: "white" }}>© 2024 Copyright : </span>
                <a href="">Mmart1232@gmail@gmail.com</a>
                <center><p> THANK YOU FOR VISITING</p></center>
                <center><p> COME BACK SOON </p></center>
                <center><marquee behaviour="scroll" direction="left" scrollamount="15">
                    <p><pre><big>HAVE A NICE DAY</big></pre></p></marquee></center>


            </div>


        </>
    )
}
