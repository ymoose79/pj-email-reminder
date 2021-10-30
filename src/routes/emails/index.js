// import { MongoClient } from "mongodb";
import { run } from '$lib/_db.js'


export async function get() {
    try {
        const dbConnection = await run()
        const db = dbConnection.db
        const collection = db.collection('eventCard')
        const emails = await collection.find({}).toArray()

        return {
            status: 200,
            body: {
                emails
            }
        }

    } catch (e) {
        return {
            status: 500,
            body: {
                e: 'server error occured'
            }
        }
    }
}

export async function post(req) {
    try {
        const dbConnection = await run()
        const db = dbConnection.db
        const collection = db.collection('eventCard')

        const email = JSON.parse(req.body)
        await collection.insertOne(email)

    return {
            status: 200,
            body: {
                status: 'success'
            }
        }
    } catch (e) {
        return {
            status: 500,
            body: {
                e: 'server error occured'
            }
        }
    }
}

export async function put(req) {
    try {
        const dbConnection = await run()
        const db = dbConnection.db
        const collection = db.collection('eventCard')

        const email = JSON.parse(req.body)

        await collection.updateOne({ id: email.id})

    return {
            status: 200,
            body: {
                status: 'success'
            }
        }
    } catch (e) {
        return {
            status: 500,
            body: {
                e: 'server error occured'
            }
        }
    }
}

export async function del(req) {
    try {
        const dbConnection = await run()
        const db = dbConnection.db
        const collection = db.collection('eventCard')

        const id = JSON.parse(req.body)

        await collection.deleteOne({ id })

    return {
            status: 200,
            body: {
                status: 'success'
            }
        }
    } catch (e) {
        return {
            status: 500,
            body: {
                e: 'server error occured'
            }
        }
    }
}
