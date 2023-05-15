const FetchClient = {
    // headers = {'Content-Type':'application/json',
    //                 'Access-Control-Allow-Origin':'*',
    //                 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    async get(url) {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
    },

    async post(url, body) {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
    },

    async put(url, body) {
        return await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
    },

    async delete(url) {
        return await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
    }
}
export default FetchClient