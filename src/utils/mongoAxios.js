import axios from "axios";

const instance = axios.create({
    baseURL:'https://peaceful-badlands-93108.herokuapp.com/'
 })
 
 export default instance