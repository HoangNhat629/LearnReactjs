import  ClientAxios  from "./ClientAxios";
const categoriesAPI = {
  getAll(params) {
    const URL = "/categories";
    return ClientAxios.get(URL, { params: params });
  },
  get(id) {
    const URL = `/categories/${id}`;
    return ClientAxios.get(URL);
  },
  add(data) {
    const URL = "/categories";
    return ClientAxios.post(URL, data);
  },
  update(data) {
    const URL = `/categories/${data.id}`;
    return ClientAxios.patch(URL, data);
  },
  remove(id) {
    const URL = `/categories/${id}`;
    return ClientAxios.delete(URL);
  },
};
export default categoriesAPI;
