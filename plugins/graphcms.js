import { GraphQLClient } from 'graphql-request'

// todo env
const graphcmsClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

export default (_, inject) => {
  inject('graphcms', graphcmsClient)
}
