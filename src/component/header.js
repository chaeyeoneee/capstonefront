import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="header_content">
                <div className="logo">
                    <div className="logo_item">
                        <Link to="/">
                            <img src={ require('./images/logo.png') } />
                        </Link>
                    </div>
                </div>
                <ul className="icon">
                    {/* <li className="heart">
                        <Link to="/favorite">
                            <img src={ require('./images/heart.png') } alt="좋아하는그림"/>
                        </Link>
                    </li>
                    <li className="people">
                        <Link to="/info">
                            <img src={ require('./images/people.png') } alt="개인정보"/>
                        </Link>
                    </li>
                    <li className="wallet">
                        <Link to="/wallet">
                            <img src={ require('./images/wallet.png') } alt="지갑"/>
                        </Link>
                    </li> */}
                    <li className="minting">
                        <Link to="/minting">
                            <p>민팅하기</p>
                        </Link>
                    </li>
                    <li className="sell">
                        <Link to="/sell">
                            <p>판매하기</p>
                        </Link>
                    </li>
                    <li className="info">
                        <Link to="/info">
                            <p>내정보</p>
                        </Link>
                    </li>
                </ul>                
                <div className="search">
                    <input placeholder="Search your NFT!"></input>                    
                    <button className="searchBtn">
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header