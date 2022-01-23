import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const deleteOneExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { deletedCount } = await mongoAtlasDataApiSdk.deleteOne({
    collection: COLLECTION_NAME,
    filter: {
      "_id": { $oid: "61b9108a9a10eddbd98cab52" }
    }
  })
}

deleteOneExample()
  .then(() => {
    console.log('Delete One Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
