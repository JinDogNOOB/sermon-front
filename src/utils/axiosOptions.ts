import qs from 'querystring';
import dotenv from 'dotenv';
import {AxiosRequestConfig} from 'axios';

dotenv.config();

const serverAddr = process.env.REACT_APP_SERVER_ADDR
const serverPort = process.env.REACT_APP_SERVER_PORT
const serverUrl = "http://" + serverAddr + ":" + serverPort;

const CONTENT_TYPE_APP_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8';
const CONTENT_TYPE_APP_JSON = 'application/json;charset=UTF-8';

/* axiosOptions.get = genGetOptions;
axiosOptions.post = genPostOptions;
axiosOptions.put = genPutOptions;
axiosOptions.delete = genDeleteOptions; */
type httpMethod = 'get' | 'post' | 'put' | 'delete';


export const getOption = (path:string, arg:{}, token:string) => {
    const options:AxiosRequestConfig = {
        method: 'get',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED,
            'Authorization' :'BEARER ' + token
        },
        params: arg 
    }
    return options;
}

export const postOption = (path:string, arg:{}, token:string) => {
    const options:AxiosRequestConfig = {
        method: 'post',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED,
            'Authorization' :'BEARER ' + token
        },
        data : qs.stringify(arg)
    }
    return options;
}

export const putOption = (path:string, arg:{}, token:string) => {
    const options:AxiosRequestConfig = {
        method: 'PUT',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED,
            'Authorization' :'BEARER ' + token
        },
        data: qs.stringify(arg)
    }
    return options;
}

export const deleteOption = (path:string, arg:{}, token:string) => {
    const options:AxiosRequestConfig = {
        method: 'DELETE',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED,
            'Authorization' :'BEARER ' + token
        },
        data: qs.stringify(arg)
    }
    return options;
}

