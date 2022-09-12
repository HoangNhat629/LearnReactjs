import  ClientAxios  from "./ClientAxios";
const productAPI = {
  getAll(params) {
    const URL = "/products";
    return ClientAxios.get(URL, { params: params });
  },
  get(id) {
    const URL = `/products/${id}`;
    return ClientAxios.get(URL);
  },
  add(data) {
    const URL = "/products";
    return ClientAxios.post(URL, data);
  },
  update(data) {
    const URL = `/products/${data.id}`;
    return ClientAxios.patch(URL, data);
  },
  remove(id) {
    const URL = `/products/${id}`;
    return ClientAxios.delete(URL);
  },
};
export default productAPI;
