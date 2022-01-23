import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const findExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { documents } = await mongoAtlasDataApiSdk.find({
    collection: COLLECTION_NAME,
    filter: {
      _id: {
        $in:
          [
              { $oid: "61c3472a1396e0693eba124c" },
              { $oid: "61eb2496b8f08060d1dee50a" },
          ]
      }
    }
  })
}

findExample()
  .then(() => {
    console.log('Find Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
