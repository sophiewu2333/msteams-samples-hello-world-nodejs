import app from './app'
import serverlessHTTP from 'serverless-http'

module.exports.app = serverlessHTTP(app)
