import React from 'react'
import './nav.css'

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg">
              <a className="navbar-brand" href="#"><img src='https://cdn-icons-png.flaticon.com/512/13540/13540100.png' height="50px" width="100px"></img></a>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">M-MART</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./fashion">kids</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Men & women
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Men</a></li><hr />
                  <li><a className="dropdown-item" href="#">shirts</a></li>
                  <li><a className="dropdown-item" href="#">T-Shirts</a></li>
                  <li><a className="dropdown-item" href="#">Footwear</a></li>
                  <li><a className="dropdown-item" href="#">Watches</a></li>
                  <li><hr className="dropdown-divider"></hr></li>


                  <li><a className="dropdown-item" href="#">women</a></li><hr />
                  <li><a className="dropdown-item" href="#">Dresses</a></li>
                  <li><a className="dropdown-item" href="#">lehangas</a></li>
                  <li><a className="dropdown-item" href="#">footwear</a></li>
                  <li><a className="dropdown-item" href="#">cosmetics</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='./winter'></a>
              </li>
            </ul>
            <form className="d-flex">
              <h4 style={{color:"white", alignContent:"flex-end"}}>Add To Cart</h4>
              <a><img src="https://cdn-icons-png.flaticon.com/512/6645/6645830.png" height="50px" width={70} alt="error" /></a>
            </form>
          </div>
        </div>
      </nav>

      
                                              </>
                                              )
}
