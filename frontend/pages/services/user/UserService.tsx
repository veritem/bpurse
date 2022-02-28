import http from "../http-common";

class UserService {

    create(data:any) {
        return http.post("/users", data)
    }


    getAll() {
        return http.get("/users");
    }
    
    get(id:any) {
        return http.get("/users/" + id)
    }

    delete(id:any) {
        return http.delete("/users/" + id)
    }


}

export default new UserService