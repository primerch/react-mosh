import apiClient from "./api-client.tsx";

export interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  getAllUsers() {
    const abortController = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: abortController.signal,
    });

    return { request, cancel: () => abortController.abort() };
  }

  createUser(user: User) {
    return apiClient.post("/users", user);
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  updateUser(user: User) {
    return apiClient.patch("/users/" + user.id, user);
  }
}
export default new UserService();
