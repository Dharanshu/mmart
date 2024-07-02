import React from 'react'
import './contentw.css'

export default function contentw() {
    return (
        <>
                <div className="backg ">
                    
                    <center><h1 style={{ color: "#700d0d", fontFamily: "serif" }}> WOMENS WEARS </h1></center><br></br>
                    <div id="carouselExampleControls" className="carousel slide my-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <center><img src="https://www.isueer.com/wp-content/uploads/2018/05/ball-gown-flower-girl-dresses-0615.jpg" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center><img src="https://th.bing.com/th/id/R.290fb9a86a74ab901759875195401e4a?rik=Vv8DRAIoBsDnNw&riu=http%3a%2f%2fgirlsmagpk.com%2fwp-content%2fuploads%2f2015%2f05%2f26.jpg&ehk=iEw7RP2QmlTMULGgCoVb9oWCKPXZLRzlW5tyKPptg6U%3d&risl=&pid=ImgRaw&r=0" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center><img src="https://th.bing.com/th/id/R.6c60e82517f04919ee4c92fc506d944d?rik=18I6TWLaW7NJaA&pid=ImgRaw&r=0" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center> <img src="https://th.bing.com/th/id/R.cfbd9d9820ef4134033ce557aac06175?rik=D%2fxqqSnZ0wdIKg&pid=ImgRaw&r=0" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center> <img src="https://th.bing.com/th/id/OIP.l73aAYrMh5P6qwWfIcCZegHaHa?pid=ImgDet&rs=1" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center><img src="https://th.bing.com/th/id/R.c36ea38a0beb031092b9eeabf014e931?rik=eq6ZoQPMqU0qVg&pid=ImgRaw&r=0" height="500px" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center><img src="https://th.bing.com/th/id/R.23c52b82f3e63591655ee2280d1a0fb4?rik=2rktgCode1yOYw&pid=ImgRaw&r=0" width={500} alt="error" /></center>
                            </div>
                            <div className="carousel-item">
                                <center><img src="https://th.bing.com/th/id/R.82b84d0d490898c986776f2db166f7d0?rik=YaWG45PbuIqEyg&pid=ImgRaw&r=0" height="500px" width={500} alt="error" /></center>
                            </div>
                        </div><br></br>
                        <center><h5 style={{ color: "black", textAlign: "center", fontFamily: "serif", fontStyle:"italic" }}><b> SWIPE </b></h5></center>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div><br />

                <marquee behaviour="scroll" direction="left" scrollamount="15" ><center><h4 style={{ color: "red" }}>
                    <pre>WINTER SEASON SALE 35% discount</pre></h4></center></marquee>
                    <center><h2 style={{ color: "#700d0d", fontFamily: "serif" }}><b>MOST TRENDING</b></h2></center><br></br>
                <div className="container-lg ">
                    <div className="row">
                        <div data-aos="fade-right" className="col-sm-4">
                            <div className="card  my-2" style={{ border: "2px solid black" }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Lehangas</h3></center>
                                <img  src="https://i.pinimg.com/originals/28/44/9b/28449bf4fba2603e35e3f02bc06ff0cf.jpg" height="500px" width="100%" className="card-img-top" alt="error" ></img>
                                <div className="card-body " style={{ textAlign: "center" }}>
                                    <h4 className="card-title" style={{ color: "#9d0c0c" }}>Bridal lehanga</h4>
                                    <p className="card-text" style={{ color: "#000000", fontFamily: "arial" }}>Price - 72099rs </p>
                                    <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                    <a href="#" className="btn btn-success my-2">Buy Now</a>
                                </div>
                            </div>
                        </div>



                        <div data-aos="fade-down" className="col-sm-4">
                            <div className="card  my-2" style={{ border: "2px solid black" }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Suits</h3></center>
                                <img  src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-taffeta-silk-punjabi-suit-in-teal-green-v1-kch973.jpg" className="card-img-top" height="500px" width="100%" alt="..." />
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <h4 className="card-title" style={{ color: "#9d0c0c" }}>Punjabi Suit</h4>
                                    <p className="card-text" style={{ color: "#000000", fontFamily: "arial" }}>Price - 2599rs </p>
                                    <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                    <a href="#" className="btn btn-success my-2">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="col-sm-4">
                            <div className="card my-2" style={{ border: "2px solid black" }}>
                                <center><h3 style={{ color: "#03233f" }} data-aos="flip-down">Sarees</h3></center>
                                <img  src="https://i.pinimg.com/474x/c4/0b/3f/c40b3f4d5c50529e2d42082ee96828f3.jpg" className="card-img-top" height="500px" width="100%" alt="..." />
                                <div className="card-body " style={{ textAlign: "center" }}>
                                    <h4 className="card-title " style={{ color: "#9d0c0c" }}>Saree</h4>
                                    <p className="card-text" style={{ color: "#000000", fontFamily: "arial" }}>Price - 25000rs </p>
                                    <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                    <a href="#" className="btn btn-success my-2">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>


            

        </>
    )
}
