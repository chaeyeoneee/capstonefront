import React from "react";
import AutoPlay from "./slider";

const Home = () => {
    return(
        <div className="main">            
            <div className="mainslider">
                <AutoPlay />
            </div>
            <div className="topcollec">
                <div className="topcollec_content">
                    <h4>TOP Collection</h4>
                    <ul>
                        <li>
                            <img src={ require('./images/topcollecImg1.jpg') } alt="topcollection이미지1"/>
                            <h4>Item1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet.
                            </p>
                            <button>
                                이동
                            </button>
                        </li>
                        <li>
                            <img src={ require('./images/topcollecImg1.jpg') } alt="topcollection이미지1"/>
                            <h4>Item1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet.
                            </p>
                            <button>
                                이동
                            </button>
                        </li>
                        <li>
                            <img src={ require('./images/topcollecImg1.jpg') } alt="topcollection이미지1"/>
                            <h4>Item1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet.
                            </p>
                            <button>
                                이동
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home