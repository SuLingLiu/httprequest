var request = require('sync-request');
var ssiUrl = 'http://www.atguat.com.cn/n/common/default/head.html';
ssiResponse = request('GET', ssiUrl).getBody().toString();
console.log(ssiResponse)