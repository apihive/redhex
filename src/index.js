import Server from './libs/server'
import Store from './libs/store'
import Logger from './utils/logger'

const HEX = function(config){
  this.Route = new Server(config)
  this.Log = Logger
  this.Store = new Store(config)
  return this
}

export default HEX
