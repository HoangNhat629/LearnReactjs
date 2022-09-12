import  ClientAxios  from "./ClientAxios";
const userAPI = {
  getAll(params) {
    const URL = "/users";
    return ClientAxios.get(URL, { params: params });
  },
  get(id) {
    const URL = `/users/${id}`;
    return ClientAxios.get(URL);
  },
  add(data) {
    const URL = "/users";
    return ClientAxios.post(URL, data);
  },
  update(data) {
    const URL = `/users/${data.id}`;
    return ClientAxios.patch(URL, data);
  },
  remove(id) {
    const URL = `/users/${id}`;
    return ClientAxios.delete(URL);
  },
};
export default userAPI;
