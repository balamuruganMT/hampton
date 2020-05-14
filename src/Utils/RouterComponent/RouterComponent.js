import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import ImageAnalysis from '../../Components/ImageAnalysis/ImageAnalysis';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Route exact={true} path='/' component={Home} />
                <Route path='/ImageAnalysis' component={ImageAnalysis} />
            </Router >
        )
    }
}

export default RouterComponent;