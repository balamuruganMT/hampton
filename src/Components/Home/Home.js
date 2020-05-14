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
            <div>
                <button onClick={this.handleRedirect}>Explore</button>
            </div>
        )
    }
}
export default withRouter(Home);