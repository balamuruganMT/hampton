import React, { Component } from 'react';
import './FileUpload.css';

import AddImage from '../../images/addImage.svg';
import RefreshImage from '../../images/refreshImage.svg';

import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, TableFooter, TablePagination } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { FileUploadService } from './FileUploadService';

import S3FileUpload from 'react-s3';
import AppConfig from '../../Config/AppConfig';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            rowsPerPage: 5,
            page: 0,
            uploadedFile: '',
            isLoading: false
        }
    }
    componentDidMount() {
        this.handleGetImageDetails();
    }
    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
        this.setState({ page: 0 });
    };

    handleUpload = (file) => {
        this.setState({ isLoading: true });
        S3FileUpload.uploadFile(file, AppConfig.s3Bucket).then(data => {
            this.handleGetImageDetails();
        }).catch(err => {
            console.error(err)
        })
    }
    handleGetImageInfo = (file, imageDesc) => {
        if (imageDesc === 'image1') {
            this.props.history.push('/ImageList', { imageList: file["Images-Set-1"] })
        }
        else {
            this.props.history.push('/ImageList', { imageList: file["Images-Set-2"] })
        }
    };
    handleGetFile = (e) => {
        this.setState({ uploadedFile: e.target.files[0] });
        this.handleUpload(e.target.files[0]);
    }

    handleGetImageDetails = () => {
        this.setState({ isLoading: true });
        FileUploadService.handleImageUpload().then(result => {
            if (result) {
                this.setState({ tableData: result.data });
                this.setState({ isLoading: false });
            }
        }).catch(error => {
            console.log(error);
            this.setState({ isLoading: false });
        })
    }
    render() {
        const { tableData, page, rowsPerPage, isLoading } = this.state;
        return (
            <div className="mainWrapper">
                <div className="mainContainer">
                    <div className="container">
                        <h3>AI powered Image Analytics</h3>
                        <div className="tableContent">
                            <div className="row tableHeader">
                                <div className="col-md-10"></div>
                                <div className="col-md-1">
                                    <div className="addImage">
                                        <img src={AddImage} alt="add" />
                                        <input onChange={this.handleGetFile} type="file" accept=".pdf" />
                                    </div>
                                </div>
                                <div className="col-md-1 refreshContainer">
                                    <div className="refreshImage">
                                        <img onClick={this.handleGetImageDetails} src={RefreshImage} alt="refresh" />
                                    </div>
                                </div>
                            </div>
                            <div className="tableData">
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell >Id</TableCell>
                                                <TableCell >File Name</TableCell>
                                                <TableCell >Image 1</TableCell>
                                                <TableCell >Image 2</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {tableData && tableData.map((file, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{file.FilesMasterId}</TableCell>
                                                    <TableCell>{file.FileMasterName}</TableCell>
                                                    <TableCell><span className="anhorStyle" onClick={() => this.handleGetImageInfo(file, 'image1')}>Click here</span></TableCell>
                                                    <TableCell><span className="anhorStyle" onClick={() => this.handleGetImageInfo(file, 'image2')}>Click here</span></TableCell>
                                                </TableRow>
                                            ))}
                                            {tableData.length === 0 && (
                                                <TableRow>
                                                    <TableCell className="emptyContent" colSpan={4} >No record table</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TablePagination
                                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                    colSpan={3}
                                                    count={tableData.length}
                                                    rowsPerPage={rowsPerPage}
                                                    page={page}
                                                    SelectProps={{
                                                        inputProps: { 'aria-label': 'rows per page' },
                                                        native: true,
                                                    }}
                                                    onChangePage={this.handleChangePage}
                                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                                />
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TableContainer>
                            </div>
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
export default withRouter(FileUpload);