class BookService {
    constructor(httpClient) {
        this.httpClient = httpClient
    }

    baseUrl = "http://localhost:8080/bookapi/"

    async createBook(book) {
        try {
            console.log(book)
            const response = await this.httpClient.post(this.baseUrl + 'createBook', book)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getAllBooks() {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'getAllBooks')
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getBooksByName(bookName) {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'getBooksByName/' + bookName)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getBookById(BookID) {
        try {
            const response = await this.httpClient.get(this.baseUrl + 'book/'+BookID)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateBook(BookID, book) {
        try {
            console.log(book)
            const response = await this.httpClient.put(this.baseUrl + 'updateBook/'+ BookID, book)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteBook(BookID) {
        try {
            const response = await this.httpClient.delete(this.baseUrl + 'deleteBook/' + BookID)
            return response.text()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default BookService