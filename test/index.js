var HEX = require('../app').default

var manifest = {
  ssl:false,
  keys:{
    privateKey: './keys/key.pem',
    certificate: './keys/server.crt'
  },
  ports:{
    http:6000,
    https:7000
  },
  api:{
    prefix:'/test',
  },
  redis:{
    port: 6379,
    host: '127.0.0.1',
    db:4
  }
}
console.log('testing...')
console.log(HEX)
console.log(new HEX(manifest))
