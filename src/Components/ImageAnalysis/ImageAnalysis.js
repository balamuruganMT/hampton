import React, { Component } from 'react';
import './ImageAnalysis.css';

import Logo from '../../images/logo.png';
import Upload from '../../images/upload.svg';
import Profile from '../../images/profile.svg';
import Banner from '../../images/banner.jpg';
import Dropzone from 'react-dropzone';

class ImageAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="mainWrapper">
                <div className="header">
                    <div className="container">
                        <div className="d-flex">
                            <div className="logo">
                                <img src={Logo} alt="Logo" height="36" />
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
                                    {/* <div>
                                    <img src={Upload} width="40" alt="upload"/>
                                    <p>Paste / Upload Your Job Description Here!</p>
                                    <span className="or">Or</span>
                                    <div className="browse"><span>BROWSE</span><input type="file" /></div>
                                    </div> */}
                                    {/* <img src={Banner} className="bannerImg" alt="Banner" /> */}
                                    <Dropzone multiple={false} accept="image/*" onDrop={acceptedFiles => this.handleDropImage(acceptedFiles)}>
                                        {({ getRootProps, getInputProps, isDragReject, rejectedFiles }) => (
                                            <section>
                                                <div className="dropzone_content" {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <img src={Upload} width="40" alt="upload" />
                                                    <p>Paste / Upload Your Image Here!</p>
                                                    <span className="or">Or</span>
                                                    <div className="browse"><span>BROWSE</span></div>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                </div>
                            </div>
                            <div className="iaRow">
                                <div className="box skillBox">
                                    <p>Resulted Output</p>
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
