exports.main = args => {
    return {
        headers: {
            'content-type': 'application/json',
        },
        body: {
            message: "'ello there!"
        },
    }
}