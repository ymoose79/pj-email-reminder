import { MongoClient } from "mongodb";

import dotenv from 'dotenv'
dotenv.config()

const { MONGODB_URI } = process.env

let client;

export async function run() {
  try {
    client = await MongoClient
      .connect(MONGODB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      return {
        client,
        db: client.db('sveltePJ')
      }
  } catch (e) {
      console.log('sad face =>', e);
    }
    finally {
      if (client) client.close;
    }
}













// const MONGODB_URI = 'mongodb+srv://jrstock:asdQWE%23%40%21321@sveltepj.qavdu.mongodb.net/sveltePJ?retryWrites=true&w=majority'

// let client;

// async function logCollection(coll) {
//     let result = await coll.find({}).toArray();
//     console.log(coll.collectionName, 'contains', result);
// }
// async function logCollections(db) {
//     const items = await db.listCollections().toArray();
//     console.log(
//         'collections are',
//         items.map(item => item.name)
//     );
// }
// async function logDatabases(client) {
//     const dbs = await client.db()
//         .admin()
//         .listDatabases();
//     console.log('databases are', dbs.databases.map(db => db.name));
// }


// export async function post(card) {
//   // target collection in a DBs
//   try {
//     client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
//     const eCards = client.db('sveltePJ').collection('eventCard')
  
//     await eCards.insertOne({
//      card
//     });
  
//     await logCollection(eCards);
//   } catch (e) {
//     return {
//       status: 500,
//       body: {
//         error: console.log('eCard not added to DB', e)
//       }
//     }
//   }
// }


// export async function delECard(card){
//   try {
    
//     // connect
//     client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
//     // define target collection
//     const eCards = client.db('sveltePJ').collection('eventCard')
//     await logCollection(eCards);
//     console.log(card);

//     // delete all the cards w/ email:
//     await eCards.deleteOne(card);

//     console.log('-------------------------');
//     await logCollection(eCards);
//   } catch (e) {
//     console.log('eCard not deleted to DB', e);
//   }
// }

// export async function run(x) {
//     try {
//         client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//       if (x === 'logDatabases') {

//         // // c/l DBs in project
//         await logDatabases(client);
//         return
        
//       } else
        
//         if (x === 'logCollections') {
//         // assign selected DB
//         const db = client.db('sveltePJ')
//         await logCollections(db);
//         return
//       } else {
//         return
//       }
//       }
//       catch (e) {
//         console.log('sad face =>', e);
//       }
//       finally {
//         if (client) client.close;
//       }

// }




















// run();

// import dotenv from 'dotenv'
// dotenv.config()
// import { Admin, MongoClient } from 'mongodb'

// // const { MongoClient } = require('mongodb')

// // const client;

// const { MONGODB_URI, MONGODB_DB } = process.env

// const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// export async function run() {
//   try {
//     await client.connect();
//     await listDatabases(client)
//     console.log(client.db.collection);
    
      
//   } catch (err) {
//       console.log(err.stack);
//   }
//   finally {
//       await client.close();
//   }
// }

// run().catch(console.dir);

// async function listDatabases(client) {
//   let databasesList = await client.db().admin().listDatabases();

//   databasesList.databases.forEach(db => console.log(`{db.name}`))
// }



  

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
        
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);







// async function main() {


//   const uri = 'mongodb+srv://jrstock:asdQWE%23%40%21321@sveltepj.qavdu.mongodb.net/sveltePJ?retryWrites=true&w=majority';

//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//   try {
//     await client.connect();
    
//     await listDatabases(client);
//     await createListing(client,
//       	        {
//       	            name: "Lovely Loft",
//       	            summary: "A charming loft in Paris",
//       	            bedrooms: 1,
//       	            bathrooms: 1
//       	        }
//       	    );
//   }
//   catch (e) {
//     console.log(e);
//   }
//   finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//   let databasesList = await client.db().admin().listDatabases();

//   console.log("databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`))
// }

// async function createListing(client, newListing){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
//   console.log(`New listing created with the following id: ${result.insertedId}`);
// }

// export default createListing();











// --------------------_>   via github repository, though not the 


// import dotenv from 'dotenv'
// dotenv.config()

// const MONGODB_URI = 'mongodb+srv://jrstock:asdQWE%23%40%21321@sveltepj.qavdu.mongodb.net/sveltePJ?retryWrites=true&w=majority'
// const MONGODB_DB = 'sveltePJ'

// import { MongoClient } from 'mongodb'

// // const { MONGODB_URI, MONGODB_DB } = process.env

// const uri = MONGODB_URI
// // const uri = process.env.MONGODB_URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!MONGODB_URI) {
//   throw new Error('Please add your Mongo ')
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise