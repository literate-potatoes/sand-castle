exports.main = async (args) => {
    const { Client } = require('pg')
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    })
    await client.connect()
    const res = await client.query('SELECT * from contacts')
    await client.end()
    const contacts = res.rows

    return {
        headers: {
            'content-type': 'application/json',
        },
        body: {
            message: "'ello there!",
            contacts,
        },
    }
}