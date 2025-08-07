import apiClient from "./api-client.tsx";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const abortController = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: abortController.signal,
    });

    return { request, cancel: () => abortController.abort() };
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
