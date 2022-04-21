import http from "../http";
class UsersDataService {
  getAll() {
    return http.get("/user");
  }
  getAllPaged(page,limit) {
    return http.get(`/user?page=${page}&limit=${limit}`);
  }
  get(id) {
    return http.get(`/user/${id}`);
  }
  getAllComments(){
      return http.get("/comment");
  }
}
export default new UsersDataService();
