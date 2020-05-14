import React,{Component} from 'react';
import './ImageAnalysis.css';

import Logo from '../../images/logo.png';
import Upload from '../../images/upload.svg';
import Profile from '../../images/profile.svg';

class ImageAnalysis extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="mainWrapper">
                <div className="header">
                    <div className="container">
                        <div className="d-flex">
                            <div className="logo">
                                <img src={Logo} alt="Logo" height="36"/>
                            </div>
                            <div className="navRight">
                                <div className="profile">
                                    <img src={Profile} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mainContainer">
                    <div className="container">
                        <h3>Image analysis</h3>
                        <div className="imgAnalysis">
                            <div className="iaRow">
                                <div className="box borderedBox">
                                    <div>
                                    <img src={Upload} width="40" alt="upload"/>
                                    <p>Paste / Upload Your Job Description Here!</p>
                                    <span className="or">Or</span>
                                    <div className="browse"><span>BROWSE</span><input type="file" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="iaRow">
                                <div className="box skillBox">
                                    <p>Resulted Skills</p>
                                </div>
                            </div>
                        </div>
                        <div className="btnGroup">
                            <button className="btns solidBtn">SUBMIT</button>
                            <button className="btns dashedBtn">RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageAnalysis;
