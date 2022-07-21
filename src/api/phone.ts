import instance from "./instance";

export const getAll = () => {
  const url = "/products";
  return instance.get(url);
};

export const createPhone = (data: any) => {
  const url = "/products";
  return instance.post(url, data);
};
