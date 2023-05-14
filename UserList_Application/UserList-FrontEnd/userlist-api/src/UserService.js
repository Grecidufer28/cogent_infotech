class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient
    }

    baseUrl = "http://localhost:8080/api/"

    async getAllUsers() {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'getAllUsers')
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getUsersByName(nameFilter) {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'getUsersByName/' + nameFilter)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getUserById(id) {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'user/'+id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createUser(user) {
        try {
            const response = await this.httpClient.post(this.baseUrl + 'createUser', user)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateUser(id, user) {
        try {
            const response = await this.httpClient.put(this.baseUrl + 'updateUser/'+ id, user)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteUser(id) {
        try {
            console.log(id)
            const response = await this.httpClient.delete(this.baseUrl + 'deleteUser/' + id)
            console.log(response)
            return response.text()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default UserService