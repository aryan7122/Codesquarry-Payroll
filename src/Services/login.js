import { apiController } from '../configs/apiController';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loginApi = async (data) => {
    try {
        let config = {
            method: 'post',
            url: API_URL + `/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        const request = apiController(config);
        return request;
    } catch (error) {
        console.log(error);
    }
}