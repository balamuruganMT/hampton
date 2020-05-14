import React, { Component } from 'react';
import './Home.css';

import logo from '../../images/hamptonLogo.png';
import faceman from '../../images/faceman.gif';


import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleRedirect = ()=>{
        this.props.history.push('/ImageAnalysis')
    }
    render() {
        return (
            
            <div className="homeContainer">
                <div>
                    <img src={logo} width="200" alt="Logo"/>
                    <img src={faceman} width="100" className="animated" alt="gif"/>
                    <h1>Hampton Data Services</h1>
                    <button className="trybtn" onClick={this.handleRedirect}>EXPLORE</button>
                </div>
            </div>

        )
    }
}
export default withRouter(Home);
