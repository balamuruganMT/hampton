import React, { Component } from 'react';
import './ImageAnalysis.css';

import Logo from '../../images/logo.png';
import Upload from '../../images/upload.svg';
import Profile from '../../images/profile.svg';
import Banner from '../../images/banner.jpg';
import Background from '../../images/background.jpeg';
import search from '../../images/search.svg';

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
                <div className="header" style={{backgroundImage: `url(${Background})`}}>
                    <div className="container">
                        <div className="d-flex">
                            <div className="logo">
                                <img src={Logo} alt="Logo" height="50" />
                            </div>
                            <div className="title">
                                <h3>Hampton Data Services</h3>
                            </div>
                            <div className="navRight">
                                <div className="search">
                                    <input type="text" name="search"/>
                                    <span><img src={search} width="16" alt="search"/></span>
                                </div>
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
                                                    <img src={Upload} width="40" className="upload" alt="upload" />
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
                                    <p><b>Name </b> :  Name here</p>
                                    <p><b>Size </b> :  Size here</p>
                                    <img src={Banner} alt="Image" />
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
