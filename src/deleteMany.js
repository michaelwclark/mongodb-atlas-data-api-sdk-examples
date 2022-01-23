import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const deleteManyExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { deletedCount } = await mongoAtlasDataApiSdk.deleteMany({
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

deleteManyExample()
  .then(() => {
    console.log('Delete Many Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
