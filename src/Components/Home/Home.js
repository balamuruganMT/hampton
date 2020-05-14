import React, { Component } from 'react';
import './Home.css';



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
                    <img src="./assets/images/hamptonLogo.png" alt="Logo"/>
                    <img src="./assets/images/brain.gif" className="animated"/>
                    <h1>Hampton Data Services</h1>
                    <a className="trybtn" onClick={this.handleRedirect}>EXPLORE</a>
                </div>
            </div>

        )
    }
}
export default withRouter(Home);
