import axios from 'axios';
import AppConfig from '../../Config/AppConfig';

export const ImageAnalysisService ={
    handleImageAnalysis
}

function handleImageAnalysis(data) {
    return axios.post(AppConfig.baseUrl +'getimage', data)
        .then(response => {
            return response;
        }).catch(err => {
            return err;
        })
}