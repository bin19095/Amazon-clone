import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-1520d.cloudfunctions.net/api' // THE API (cloud functoin) URL
    
    //http://localhost:5001/challenge-1520d/us-central1/api
    //http function initialized (http://localhost:5001/challenge-1520d/us-central1/api
});

export default instance;