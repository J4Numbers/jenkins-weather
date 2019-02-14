import devConfig from '../../config/conf.dev.js';
import prodConfig from '../../config/conf.prod.js';

export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
