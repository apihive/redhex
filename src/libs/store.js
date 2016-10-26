import Redis from 'redis'
import Logger from '../utils/logger'

export default function(config){
  const client =  Redis.createClient(
    config.redis.port
    ,config.redis.host
    ,{no_ready_check: true}
  )
  client.select(config.redis.db,function(){
    Logger.info('Database '+ config.redis.db +' selected')
  })
  client.on("error", function (err) {
    Logger.error("Redis Transaction Error : " + err)
  })
  return client
}
