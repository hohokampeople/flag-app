import React, { Component } from "react";

class Body extends Component {

    constructor(props) {
        super(props);
        this.viewAllAction = this.viewAllAction.bind(this);
        this.state = {page : 'home'};
    }

    viewAllAction () {
        this.setState({page : 'flags'});

        /** 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"operationName":null,"variables":{},"query":"{\n  Country {\n    name\n    flag {\n      svgFile\n    }\n  }\n}\n"})
        };
        fetch('https://countries-274616.ew.r.appspot.com/philippines', requestOptions)
        .then(response => response.json())
        .then(response => this.setState({init:false, countries: response.data.Country}));
        **/
    }

    render () {
        console.log(this.state.page);
        if(this.state.page === 'home') {
            return (
                <section className="home">
                   <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">&nbsp;</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12"><h1>Looking for flags?</h1></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12"><h6>We have them all.</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">&nbsp;</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12"><button className="btn btn-primary" onClick={this.viewAllAction}>View All</button></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">&nbsp;</div>
                        </div>
                    </div>
                 </section>
            );
        }
        else {
            return (
                <section className="flags">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">All Flags</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <button type="button" className="btn">A to Z</button>&nbsp;
                                <button type="button" className="btn">Z to A</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div>1</div>
                        <div>2s</div>
                    </div>
                </section>
            );
            
        }
    }
}

export default Body