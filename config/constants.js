/**
 * Created by mac on 5/2/15.
 */

module.exports = {
//    app: {
//        title: 'Server (API Development)',
//        description: 'Api Development for CRM',
//        keywords: 'MongoDB, Express, AngularJS, Node.js ,CRM'
//    },
//    root: rootPath,
//    port: process.env.PORT || port_env,
//    templateEngine: 'swig',
    DBname: 'db',
//    winstonDB: 'server-api-development-dev',
//    winstonCollection: 'logs',
    sessionSecret: 'server-api-development',
//    sessionCollection: 'sessions',
//    apiVersion: '/api/v1',
    cors: {
        origin: ['fibrewaves.local','localhost','crm.fibrewaves.com.au'],
        method: 'GET,PUT,POST,DELETE,OPTIONS',
        headers : 'Content-Type, Authorization, Content-Length, X-Requested-With',
        credentials : 'true'
    },
    isResponseJson: false

};