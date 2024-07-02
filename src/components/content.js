import React from 'react'
import './content.css'

export default function content() {
    return (
        <>
            <div className='whole'>
                <div className="bgimg">
                    <div className="container-fluid">
                        <h1 style={{ textAlign: "center" }}> <span style={{ color: "white", fontFamily: "serif" }}><b>MENS & WOMENS CLOTHS</b></span></h1>
                        <center><h1 style={{ color: "#700d0d", fontFamily: "serif" }}> MENS WEARS </h1></center>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <center><h3 style={{ color: "white" }}> H&m T-shirts</h3><img src="https://cf.shopee.com.my/file/ca1471a5cddb13672cfdda7f2835d745" width={500} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> T-shirts Combos </h3><img src="https://th.bing.com/th/id/OIP.IyOZnZWj7WSLfSln1lV1fAHaLH?rs=1&pid=ImgDetMain" width={500} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> Hoodies </h3><img src="https://lp2.hm.com/hmgoepprod?set=quality[79]%2Csource[%2F16%2Fcb%2F16cb1b9d193f4a95c267444a265b7efa33f56495.jpg]%2Corigin[dam]%2Ccategory[men_hoodiessweatshirts]%2Ctype[DESCRIPTIVESTILLLIFE]%2Cres[m]%2Chmver[1]&call=url[file:/product/main]" width={400} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> Jackets </h3><img src="https://media1.popsugar-assets.com/files/thumbor/IWotdtMAxBQap3p8ybNAYFRRHNk/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/16/903/n/1922564/5f8574cdd1b1fd91_hmgoepprod_48_/i/HM-Wool-Blend-Baseball-Jacket.webp" width={400} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> Sneakers </h3><img src="https://images.complex.com/complex/images/c_scale,q_auto,w_1920/fl_lossy,pg_1/lb6fbdfogjso6yi2pjue/best-sneakers-2017" width={600} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> Watches </h3><img src="https://wallpapercave.com/wp/wp2168331.jpg" width={600} height="400px" alt="error" /></center>
                                </div>
                                <div className="carousel-item">
                                    <center><h3 style={{ color: "white" }}> Shirts </h3><img src="https://i5.walmartimages.com/asr/55f93193-366e-43f2-b33d-e865907172be.f1f84c4edf588b81bb94f986b8a6dd5c.jpeg" width={400} height="400px" alt="error" /></center>
                                </div>

                            </div><br></br>
                                <h5 style={{ color: "white", textAlign: "center", fontFamily: "serif", fontStyle:"italic" }}><b> SWIPE </b></h5>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div><br></br>
                </div>


                <marquee behaviour="scroll" direction="left" scrollamount="15">
                    <center><h4 style={{ color: "red" }}><pre>WINTER SEASON SALE 20% discount</pre></h4></center></marquee>
                    <center><h2 style={{ color: "#700d0d", fontFamily: "serif" }}><b>MOST TRENDING</b></h2></center><br></br>
                <div className="container-lg">
                    <div className="row">
                        <div data-aos="fade-right" className="col-sm-4">
                            <div className="card my-2" style={{ border: "2px solid black " }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Jackets</h3></center>
                                <img   src="https://i.pinimg.com/originals/03/dc/b5/03dcb56f9056f8211e8621c56891cfac.jpg" height="400px" width="40px" className="card-img-top" alt="error" />
                                <div className="card-body">
                                    <center><h4 className="card-title" style={{ color: "#9d0c0c" }}>Jacket</h4></center>
                                    <center><p className="card-text" style={{ color: "#000000", fontFamily: "arial" }}>Price - 3049rs</p></center>
                                    <center><a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                        <a href="#" className="btn btn-success my-2">Buy Now</a></center>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-sm-4">
                            <div className="card my-2" style={{ border: "2px solid black" }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Hoodies</h3></center>
                                <img   src="https://th.bing.com/th/id/R.9d062597280fa935bbb0a4e5035e6c5e?rik=aA1eaA6f2YpGEw&pid=ImgRaw&r=0https://drewmerch.com/wp-content/uploads/2021/08/drew-hoodie-ice-blue-2048x2048.jpg" className="card-img-top" height="400px" width="40px" alt="error" />
                                <div className="card-body">
                                    <center><h4 className="card-title" style={{ color: "#9d0c0c" }}>Drew Hoodie</h4></center>
                                    <center><p className="card-text" style={{ color: "#000000", fontFamily: "arial" }}>Price - 9359rs</p></center>
                                    <center><a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                        <a href="#" className="btn btn-success my-2">Buy Now</a></center>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-sm-4">
                            <div className="card my-2" style={{ border: "2px solid black" }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Sweaters</h3></center>
                                <img   src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_2172535712??hei=64&wid=64&qlt=50" height="400px" width="40px" className="card-img-top" alt="error" />
                                <div className="card-body">
                                    <center><h4 className="card-title" style={{ color: "#9d0c0c" }}>Sweater</h4></center>
                                    <center><p className="card-text" style={{color: "#000000",fontFamily: "arial" }}>price - 2319rs</p></center>
                                    <center><a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                        <a href="#" className="btn btn-success my-2">Buy Now</a></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/>
            </div> 
        </>
    )
}
