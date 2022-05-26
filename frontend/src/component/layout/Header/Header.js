import React from 'react';
import './Header.css';
import categorySymbol from "./../../../images/categorySymbol.svg";
import logo from "./../../../images/Infinity-logo.png";
import { AiOutlineSearch , AiOutlineUser} from "react-icons/all";

export default function Header() {
  return (
    <nav>
        <div className="nav">
            <div className="nav-logo">
                <div className=" nav-sub-cat">
                    <a href='/'><img className='nav-logo-img' src={logo} alt="Infinity Bazaar" /></a>
                </div>
                <div className=" nav-sub-cat">
                    
                    {/* <div className="dropdown"> */}
                        <button className="dropbtn"><a href='/products' className='cat-btn'><img src={categorySymbol} alt="categories"/><p id="big-nav">Products</p></a></button>
                        {/* <div className="dropdown-content">
                          <a href="/products">Clothes</a>
                          <a href="gurman">Electronics</a>
                          <a href="gurman">Food</a>
                        </div>
                      </div> */}
                </div>
            </div>

            <div className="nav-cart">
                <div className=" nav-sub-cat" id="big-nav-search">
                    <a href="/search" className='nav-search-button'><AiOutlineSearch /></a>
                </div>
                <div className=" nav-sub-cat">
                    
                    <div className="dropdown">
                      <p className="dropbtn"  style={{color: "#000",padding: "2px",display: "flex",alignItems: "center",justifyContent: "center"}}><a href='/login' className='nav-search-button'><AiOutlineUser/></a></p>
                    </div>
                </div>
            </div>

        </div>
    </nav>
  );
}
