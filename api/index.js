import axios from 'axios';
import config from 'config';

const app_url = 'localhost:4000';//config.get('app_url');

const getApp = (res) => {
    axios.get('http://'+app_url+'/all')
        .then((response) => {
         console.log(response.data);
         res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });   
}

const postApp = (postObject, res) => {
    axios.post('http://'+app_url+'/app', postObject)
        .then((response) => {
         console.log(response.data);
         res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });   
}

const putApp = (postObject, res) => {
    axios.put('http://'+app_url+'/app', postObject)
        .then((response) => {
         console.log(response.data);
         res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });   
}

export {
    getApp,
    postApp,
    putApp
}