import app from './app'
import serverlessHTTP from 'serverless-http'
import delay from 'timeout-as-promise'

const handler = serverlessHTTP(app)

module.exports.app = async (event, context) => {
  const result = await handler(event, context)
  console.log(event, result)
  await delay(3000) // hacky
  return result
}
