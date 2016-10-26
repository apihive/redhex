/* @flow weak */
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import morgan from 'morgan'
import HTTP from 'http'
import HTTPS from 'https'
import fs from 'fs'
import Logger from '../utils/logger'

const upload = multer()

const app = express()

const router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

router.use(function(req, res, next) {
  Logger.info('Processing request.')
  next()
});

const Server  =  function(config){

  app.use(config.api.prefix,router)

  const routing = function(ep){
    for(var i = 0; i < ep.length; i++){
      if(ep[i].methods.length == 0){
        Logger.error('No Methods: Please put something like ["get","post","put"]')
        return false;
      }
      const get = ep[i].methods.indexOf("GET")
      const post = ep[i].methods.indexOf("POST")
      const put = ep[i].methods.indexOf("PUT")

      const route = router.route(ep[i].url)
      if(get > -1){
        route.get(ep[i].operator)
      }
      if(post > -1){
        route.post(ep[i].operator)
      }
      if(put > -1){
        route.put(ep[i].operator)
      }

    }
  }

  if(!config.ssl || config.ssl === false){
    HTTP.createServer(app)
    .listen(config.ports.http)
    Logger.info('[ HTTP ] listening at port '+config.ports.http)
    return routing

  }else if(config.ssl === true){

    const privateKey  = fs.readFileSync(config.keys.privateKey, 'utf8')
    const certificate = fs.readFileSync(config.keys.certificate, 'utf8')
    const cred = {key: privateKey, cert: certificate};
    HTTPS.createServer(cred, app)
    .listen(config.ports.https)
    Logger.info('[ HTTPS ] listening at port '+config.ports.https)
    return routing
  }

}

export default Server
