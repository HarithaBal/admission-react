import api from "../utils/api";

export const registerRequest = (values) => {
  return api.post("/api/users", values);
};

export const loginRequest = (values) => {
  return api.post("/api/auth/login", values);
};

export const verifyUserRequest = (user, hash) => {
  return api.put(`/api/users/verifyUser?sub=${user}&hash=${hash}`);
};

export const managementFormRequest = (values, token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.post("/api/details", {
    meta: values,
    doc_type: "management_form",
  });
};

export const communityFormRequest = (values, token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.post("/api/details", {
    meta: values,
    doc_type: "community_form",
  });
};

export const getManagementFormRequest = (token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.get(`/api/details?doc_type=management_form`);
};

export const getCommunityFormRequest = (token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.get(`/api/details?doc_type=community_form`);
};

export const updatePasswordRequest = (values, token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.put(`/api/users/updatePassword`, values);
};

export const getLogsRequest = (token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.get(`/api/logs`);
};

export const addPaymentData = (values, token) => {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
  return api.post("/api/details", {
    meta: values,
    doc_type: "payment",
  });
};

export const fetchStudents = () => {
  api.defaults.headers.common = { Authorization: "bearer " };

  return api.get("/api/users/students");
};
