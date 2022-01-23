import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const replaceOneExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { matchedCount, modifiedCount, upsertedId } = await mongoAtlasDataApiSdk.replaceOne({
    collection: COLLECTION_NAME,
    filter: {
      "_id": { $oid: "61b9108a9a10eddbd98cab52" }
    },
    replacement: {
      "name": "MongoDb Atlas",
      "type": "database"
    },
    upsert: false,
  })
}

replaceOneExample()
  .then(() => {
    console.log('Replace One Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
