import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const insertManyExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { insertedIds } = await mongoAtlasDataApiSdk.insertMany({
    collection: COLLECTION_NAME,
    documents: [
      {
        "name": "MongoDB Atlas",
        "type": "database",
      },
      {
        "name": "Quokka",
        "type": "developer_tool"
      }
    ]
  })
}

insertManyExample()
  .then(() => {
    console.log('Insert Many Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
