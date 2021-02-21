import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";


class App extends Component {

    render() {
        return (
            <div className="main">
                <Header/>   
                <Body/>
                <Footer/>
            </div>
        );   
    }
}

export default App