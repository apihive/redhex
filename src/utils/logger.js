import winston from 'winston';
import {getTimestamp} from './dates';

const Logger = new (winston.Logger)({
   transports: [
     new (winston.transports.Console)(),
     new (winston.transports.File)({ filename: './logs/'+getTimestamp().date+'_debug.log' })
   ]
 });

export default Logger;
