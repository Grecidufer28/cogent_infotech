import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { User } from "./user"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class UserService {
    private baseUrl = "http://localhost:8080/api/users"

    constructor(private http:HttpClient) {

    }

    addUser(newUser:User):Observable<User> {
        return this.http.post<User>(`${this.baseUrl}`, newUser)
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}`)
    }

    deleteUser(id:number): Observable<String> {
        return this.http.delete<String>(`${this.baseUrl}/${id}`)
    }

    getUserById(id:number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`)
    }

    updateUser(id:number, updatedUser:User): Observable<String> {
        return this.http.put<String>(`${this.baseUrl}/${id}`, updatedUser)
    }

}