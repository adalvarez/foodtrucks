'use strict';

export default {
  logger: {
    file: {
      filename: '../res/log.log',
      style: '[:date[clf]]\t:remote-addr\t:method\t:url\t:status\t:res[content-length]\t:response-time ms\tHTTP/:http-version\t":user-agent"' // Custom style
    },
    runtime: {
      style: ':method :url :status :response-time ms - :res[content-length]' // Custom style
    }
  },
  port: 8081,
};