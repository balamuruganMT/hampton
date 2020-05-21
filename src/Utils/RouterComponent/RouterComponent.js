import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import ImageAnalysis from '../../Components/ImageAnalysis/ImageAnalysis';
import Header from '../../Components/Header/Header';
import FileUpload from '../../Components/FileUpload/FileUpload';
import ImageList from '../../Components/ImageList/ImageList';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Route exact={true} path='/' component={Home} />
                <div>
                    <Header />
                    <Route path='/ImageAnalysis' component={ImageAnalysis} />
                    <Route path='/FileUpload' component={FileUpload} />
                    <Route path='/ImageList' component={ImageList} />
                </div>
            </Router >
        )
    }
}

export default RouterComponent;