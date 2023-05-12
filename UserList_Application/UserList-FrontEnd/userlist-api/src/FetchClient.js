const FetchClient = {
    async get(url) {
        return await fetch(url)
    },

    async post(url, body) {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        })
    },

    async put(url, body) {
        return await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        })
    },

    async delete(url, body) {
        return await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        })
    }
}
export default FetchClient