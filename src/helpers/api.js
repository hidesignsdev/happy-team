import axios from 'axios';

const getAxiosInstance = async () => {

    const axiosInstance = axios.create();

    axiosInstance.interceptors.response.use(
        response => {
            if ([200, 201].includes(response.status)) {
                const result = response.data;
                result.statusCode = response.status;
                return response.data;
            }
            return Promise.reject(response);
        },
        error => {
            const { code } = error.response.data;

            if (code) {
                if (code === 209) {
                    // localStorage.removeItem('token'); should it be converted to " AsyncStorage.removeItem('token');"?
                    // window.location.replace('/'); We are not in the browser so I don't think there is a window, not immediately sure how to change this code.
                }
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error.response.statusText);
        },
    );

    return axiosInstance;
};

const request = async (url, data = {}, type = 'GET') => {
    try {
        const API = await getAxiosInstance();
        switch (type) {
            case 'GET':
                return API.get(url, data);
            case 'POST':
                return API.post(url, data);

            default:
                return API.get(url, data);
        }

    } catch (error) {
        return Promise.reject(error);
    }
};

export default request;