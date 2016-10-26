import winston from 'winston';

const Logger = new (winston.Logger)({
   transports: [
     new (winston.transports.Console)(),
     new (winston.transports.File)({ filename: 'debug.log' })
   ]
 });

export default Logger;
