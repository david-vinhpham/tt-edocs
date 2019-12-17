import axios from 'axios';
import URL from '../constants/url';

const instance = axios.create({
  baseURL: URL.HOST,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post.Accept = 'application/json';
instance.defaults.headers.get.Accept = 'application/json';
instance.defaults.headers.get['Content-Type'] = 'application/json';

export default instance;
