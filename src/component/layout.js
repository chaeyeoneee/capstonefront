import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({props}) => {
    return(
        <div>
            <Header />
            <div>
                {props}
            </div>    
            <Footer />
        </div>
    )
}

export default Layout;