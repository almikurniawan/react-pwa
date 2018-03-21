import React, { Component } from 'react';
export default class Footer extends Component {
    constructor(props){
        super(props);
    }    

    render() {
        return (
            <div className="container-fluid" style={{background: 'rgb(189, 46, 46)',color: "white",minHeight: '40px',lineHeight: "40px"}}>
                <div className="row">
                    <div className="col-12">
                        <center>
                            Copy Wrong @almikurniawan 2018
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}