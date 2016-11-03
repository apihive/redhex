# redhex [API Builder]

A Redis, Http/Https and Express API builder

### Installation
--save will save redhex to your dependencies
```
npm install redhex --save
```
### Manifest [config]
this can be any filename that contains your configurations
```javascript
{
  ssl:true, //dafault false
  keys:{
    privateKey: PATH.TO.SSL.KEY,
    certificate: PATH.TO.SSL.CERTIFICATE
  },
  ports:{
    http:6001,
    https:7001
  },
  api:{
    prefix:ROUTE.PREFIX, //EX: 127.0.0.1:7001/[prexif]/endpoint
  },
  redis:{
    port: 6379,
    host: '127.0.0.1',
    db:4
  },
  logger:{ // [optional] todo
  	rotate:true // todo
    folder:'foldername'// todo
  }
}
```

### Usage
This is how you will use it in its simplest form.
```javascript
	//ES6
	import HEX FROM 'redhex'
    import manifest from '../path/to/manifest'
    const APP = new HEX(manifest)

    //CommonJS
    var HEX = require('redhex')
    var manifest = require('path/to/manifest')
    //or   
    var manifest = {//same a above manifest example}
    var APP = new HEX(manifest)
```
`Thus`
```javascript
    const APP = new HEX(manifest)
    //Returns Obj = {Route,Log,Store}
```
##### APP.Route([array])
```javascript
    const operatorFunc = function(){}
    const endpoints = [
                        {
                          url:'/user',
                          methods:['GET','POST','PUT'],
                          operator: operatorFunc
                        }
                      ]
    APP.Route(endpoints)
```
##### APP.Log
```javascript
    const Log = APP.Log //SHORTEN [optional]
    Log.info()
    Log.warn()
    Log.error()
```
##### APP.Store
```javascript
	const Store = APP.Store //SHORTEN [optional]
    Store.LPUSH(key, value, callback)
```

### Complete Todo Example
[REDHEX-TODO](https://github.com/apihive/redhex-todo) is on Github, Feel free to download it for free. Cheers!
```
https://github.com/apihive/redhex-todo
```
### Become a contributor
email me at
```
rhomnickcoloma@gmail.com
```

### ISC LICENSE (ISC)

Copyright (c) 2016, Rhomnick B. Coloma rhomnickcoloma@gmail.com

Permission to use, copy, modify, and/or distribute this software for any
with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
