import React, { Component } from 'react';
import './ImageList.css';

import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, TableFooter, TablePagination } from '@material-ui/core';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [],
            rowsPerPage: 5,
            page: 0
        }
    }
    componentDidMount() {
        this.setState({ imageList: this.props.location.state.imageList });
    }
    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
        this.setState({ page: 0 });
    };
    render() {
        const { imageList, rowsPerPage, page } = this.state;
        return (
            <div className="mainWrapper">
                <div className="mainContainer">
                    <div className="container">
                        <h3>AI powered Image Analytics</h3>
                        <div className="tableContent">
                            <div className="tableData">
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell >Id</TableCell>
                                                <TableCell >File Name</TableCell>
                                                <TableCell >Image</TableCell>
                                                <TableCell >Cylindar</TableCell>
                                                <TableCell >Thin Section</TableCell>
                                                <TableCell >Sesimic</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {imageList && imageList.map((file, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{file.ImageId}</TableCell>
                                                    <TableCell>{file.ImageFileName}</TableCell>
                                                    <TableCell>
                                                        <a className="imageUrl" href={file.ImageFileUrl} target="_blank" rel="noopener noreferrer">{file.ImageFileUrl}</a>
                                                    </TableCell>
                                                    <TableCell>{file.ImageClass[0].cylinder}</TableCell>
                                                    <TableCell>{file.ImageClass[0].thinsection}</TableCell>
                                                    <TableCell>{file.ImageClass[0].seismic}</TableCell>
                                                </TableRow>
                                            ))}
                                            {imageList.length === 0 && (
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
                                                    count={imageList.length}
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

            </div>
        )
    }
}
export default ImageList;