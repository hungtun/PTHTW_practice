import apiClient from "./client";

export async function fetchUsers(params = {}) {
  const {
    search,
    role,
    page = 0,
    size = 10,
    sort = "username",
    order = "asc",
  } = params;

  const { data } = await apiClient.get("/api/users", {
    params: {
      ...(search != null && search !== "" ? { search } : {}),
      ...(role ? { role } : {}),
      page,
      size,
      sort,
      order,
    },
  });
  return data;
}
