import axios from 'axios';

const instence = axios.create({
    baseURL: 'https://react-burger-3a474.firebaseio.com/'
});

export default instence;