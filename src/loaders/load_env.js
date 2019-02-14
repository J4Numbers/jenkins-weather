import devConfig from '../../config/conf.dev.js';
import prodConfig from '../../config/conf.prod.js';

module.exports = (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
