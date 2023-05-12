class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    baseUrl = "http://localhost:8080/api/user/"

    async getAllUsers() {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'getAllUsers')
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createUser(user) {
        try {
            const response = await this.httpClient.post(this.baseUrl + 'createUser')
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteUser(user) {
        try {
            const response = await this.httpClient.delete(this.baseUrl + 'deleteUser')
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default UserService