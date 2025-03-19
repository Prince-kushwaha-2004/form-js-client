import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: 'https://form-js-server.onrender.com/api/',
});

type requestType = {
    method: string,
    url: string,
    data?: object | null,
    params?: object | null,
    contentType?: string,
    cb(data: object): void
}

type errorResopnse = {
    status: number,
    data: {
        error: string
    }
}

const handleError = (error: errorResopnse) => {
    switch (error?.status) {
        case 401:
            // Router.push("/admin");
            console.log(error);
            break;
        case 400:
            // toast.error(error.data.error)
            console.log(error);
            break;
        default:
            console.log(error);
    }
};


export const apiCall = ({
    method,
    url,
    data,
    params,
    contentType,
    cb,
}: requestType) => {
    instance({
        method: method,
        url: url,
        withCredentials: true,
        data: data,
        params: params,
        headers: {
            "Content-Type": contentType,
        },
    })
        .then((response: AxiosResponse) => {
            cb(response.data);
        })
        .catch((error: { response: errorResopnse }) => {
            let response = error.response
            handleError(response);
        });
};
