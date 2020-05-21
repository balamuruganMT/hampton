import axios from 'axios';
import AppConfig from '../../Config/AppConfig';

export const FileUploadService = {
    handleImageUpload
}

function handleImageUpload(data) {
    return axios.get(AppConfig.uploadUrl + 'Prod', data)
        .then(response => {
            return response;
        }).catch(err => {
            return err;
        })
}

