exports.main = (args) => {
    // const { Client } = require('pg')
    // const client = new Client({
    //     connectionString: (process.env.DATABASE_URL || "").replace("?sslmode=require", ""),
    //     ssl: {
    //         rejectUnauthorized: false,
    //         require: true,
    //     }
    // })
    return (async () => {
        // await client.connect()
        // const res = await client.query('select * from contacts')
        // await client.end()
        // const contacts = res.rows

        return {
            headers: {
                'content-type': 'application/json',
            },
            body: {
                message: "'ello there!",
                // contacts,
            },
        }
    })()
}

// console.log(exports.main())