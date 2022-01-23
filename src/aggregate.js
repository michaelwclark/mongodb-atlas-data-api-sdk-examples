import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'
import { 
  API_KEY,
  API_URL,
  DB_CLUSTER,
  DB_NAME,
  COLLECTION_NAME 
} from './env.js'

const aggregateExample = async () => {
  const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
  })

  const { documents } = await mongoAtlasDataApiSdk.aggregate({
    collection: COLLECTION_NAME,
    pipeline:[
      {
        "$group": {
          "_id": "$status",
          "count": { "$sum": 1 },
          "text": { "$push": "$text" }
        }
      },
      { "$sort": { "count": 1 } }
    ]
  })
}

aggregateExample()
  .then(() => {
    console.log('Aggregate Example Complete')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(() => {
    process.exit(0)
  })
