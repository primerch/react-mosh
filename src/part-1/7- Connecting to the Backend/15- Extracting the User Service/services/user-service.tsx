import apiClient from "./api-client.tsx";

export interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  getAllUsers() {
    const abortController = new AbortController();

    const request = apiClient.get<User[]>(
      "https://jsonplaceholder.typicode.com/users",
      {
        signal: abortController.signal,
      },
    );

    return { request, cancel: () => abortController.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("https://jsonplaceholder.typicode.com/users/" + id);
  }
}
export default new UserService();
