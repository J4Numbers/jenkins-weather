import dotenv from 'dotenv';

console.log(`'${process.env.NODE_ENV.toLowerCase() || 'dev'}'`);
dotenv.config({ path: `../config/${(process.env.NODE_ENV).toLowerCase() || 'dev'}.env` });
