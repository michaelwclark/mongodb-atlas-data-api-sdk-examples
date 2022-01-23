# mongodb-atlas-data-api-sdk-examples
Examples of using mongodb-atlas-data-api-sdk

To run the examples update the environment variables accordingly. You can hardcode these too just update the src/env.js file.

```
export API_KEY=<YOUR MONGO ATLAS DB API KEY>
export API_URL=<YOUR MONGO ATLAS DB API URL>
export DB_CLUSTER=<YOUR MONGO ATLAS CLUSTER NAME>
export DB_NAME=<YOUR MONGO ATLAS DB NAME>
export COLLECTION_NAME=<YOUR COLLECTION NAME>
```

# Examples available:
```
> yarn findOne
> yarn find
> yarn insertOne
> yarn insertMany
> yarn updateOne
> yarn updateMany
> yarn replaceOne
> yarn deleteOne
> yarn deleteMany
> yarn aggregate
```
Note that the structure and IDs in the examples will likely not work for your db without modification, but hopefully will give you a starting point for using this SDK.

