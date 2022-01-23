import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const updateManyExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { matchedCount, modifiedCount, upsertedId } = await mongoAtlasDataApiSdk.updateMany({
    collection: COLLECTION_NAME,
    filter: {
      "type": "developer_tool"
    },
    update: {
      $set: {
        "type": "database"
      }
    },
    upsert: false,
  })
}

updateManyExample()
  .then(() => {
    console.log('Update Many Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
