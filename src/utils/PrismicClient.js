import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://gatsby-and-prismic-website.cdn.prismic.io/api/v2'
const Client = Prismic.client(apiEndpoint)

export default Client 