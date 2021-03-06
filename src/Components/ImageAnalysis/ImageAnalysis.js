import React, { Component } from 'react';
import './ImageAnalysis.css';

import Upload from '../../images/upload.svg';

import Dropzone from 'react-dropzone';
import { ImageAnalysisService } from './ImageAnalysisService';

class ImageAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: '',
            imageBase64data: '',
            formatError: false,
            resultantData: {},
            isLoading: false
        }
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
            this.setState({ isLoading: true })
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
                        this.setState({ resultantData: resultobj });
                        this.setState({ isLoading: false });
                    }
                }
            }).catch(error => {
                this.setState({ isLoading: false });
                console.log(error)
            })
        }
    }

    handleReset = () => {
        this.setState({
            imageBase64data: '',
            uploadedFile: '',
            formatError: false,
            resultantData: {},
            isLoading: false
        })
    }

    render() {
        const { imageBase64data, formatError, resultantData, isLoading } = this.state;
        return (
            <div className="mainWrapper">
                <div className="mainContainer">
                    <div className="container">
                        <h3>AI powered Image Analytics</h3>
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
                                                            <img src={Upload} className="upload" width="40" alt="upload" />
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
                                    <h3 className="result_title">Results :</h3>
                                    {Object.keys(resultantData).length !== 0 &&
                                        <div className="resultBox">
                                            <p><b>Image Classification </b> :  {resultantData.image_classification}</p>
                                            <p><b>Confidence Level </b> :  {resultantData.Confidence_level}</p>
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
                {isLoading &&
                    <div className="loader_style">
                        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ImageAnalysis;
