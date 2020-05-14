import React, { Component } from 'react';
import './ImageAnalysis.css';

import Logo from '../../images/logo.png';
import Upload from '../../images/upload.svg';
import Profile from '../../images/profile.svg';
import Background from '../../images/background.jpeg';
import search from '../../images/search.svg';

import Dropzone from 'react-dropzone';
import { ImageAnalysisService } from './ImageAnalysisService';

class ImageAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: '',
            imageBase64data: '',
            formatError: false,
            resultantData: ''
        }
    }

    componentDidMount() {
        let daat = "C:\\Mathu\\Projects\\hds/output/114.jpg";
        console.log(daat.split("."))
    }
    handleDropImage = (imageFile) => {
        if (imageFile.length > 0) {
            this.setState({ uploadedFile: imageFile[0] });
            if (imageFile[0].type.indexOf("image") === 0) {
                this.setState({ formatError: false });
                const reader = new window.FileReader();
                reader.readAsDataURL(imageFile[0]);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    this.setState({ imageBase64data: base64data })
                }
            }
        }
        else {
            this.setState({ formatError: true });
        }
    }

    handleImageAnalysis = () => {
        if (this.state.uploadedFile && this.state.imageBase64data) {
            let formData = new FormData();
            formData.append("file", this.state.uploadedFile);
            ImageAnalysisService.handleImageAnalysis(formData).then(result => {
                if (result) {
                    if (result.data) {
                        let imageType = result.data.path.split(".");
                        let base64data = 'data:image/' + imageType[1] + ';base64,' + result.data.data;
                        let resultobj = {
                            Confidence_level: result.data.Confidence_level,
                            image_classification: result.data.image_classification,
                            imageBase64data: base64data
                        }
                        this.setState({ resultantData: resultobj })
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }

    handleReset = () => {
        this.setState({
            imageBase64data: '',
            uploadedFile: '',
            formatError: false,
        })
    }

    render() {
        const { imageBase64data, formatError, resultantData } = this.state;
        return (
            <div className="mainWrapper">
                <div className="header" style={{ backgroundImage: `url(${Background})` }}>
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
                                    <input type="text" name="search" placeholder="search" />
                                    <span><img src={search} width="16" alt="search" /></span>
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
                                    <Dropzone multiple={false} accept="image/*" onDrop={acceptedFiles => this.handleDropImage(acceptedFiles)}>
                                        {({ getRootProps, getInputProps, isDragReject, rejectedFiles }) => (
                                            <section>
                                                <div className="dropzone_content" {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    {imageBase64data ?
                                                        <img src={imageBase64data} className="bannerImg" alt="Banner" /> :
                                                        <div className="dropzone_text">
                                                            <img src={Upload} width="40" alt="upload" />
                                                            <p>Paste / Upload Your Image Here!</p>
                                                            <span className="or">Or</span>
                                                            <div className="browse"><span>BROWSE</span></div>
                                                        </div>
                                                    }
                                                    {(isDragReject || formatError) && <p className="dropzone_error">File type not accepted, sorry!</p>}
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                </div>
                            </div>
                            <div className="iaRow">
                                <div className="box skillBox">
                                    <h3 className="result_title">Resulted Output :</h3>
                                    {Object.keys(resultantData).length !== 0 &&
                                        <div>
                                            <p><b>Confidence Level </b> :  {resultantData.Confidence_level}</p>
                                            <p><b>Image Classification </b> :  {resultantData.image_classification}</p>
                                            <img src={resultantData.imageBase64data} alt="outputImg" />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="btnGroup">
                            <button className="btns solidBtn" onClick={this.handleImageAnalysis}>SUBMIT</button>
                            <button className="btns dashedBtn" onClick={this.handleReset}>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageAnalysis;
