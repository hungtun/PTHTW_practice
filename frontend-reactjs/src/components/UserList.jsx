import { useCallback, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
import { fetchUsers } from "../api/userApi";
import { mapUsersPageToTableRows } from "../api/userMappers";
import UserTable from "./UserTable";
import UserModal from "./UserModal";

export default function UserList() {
  const [isModalOpen, { setTrue: openModal, setFalse: closeModal }] =
    useToggle(false);

  const [page, setPage] = useState(0);
  const pageSize = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers({ page, size: pageSize });
      setUsers(mapUsersPageToTableRows(data));
      setTotalPages(data.totalPages ?? 0);
      setTotalElements(data.totalElements ?? 0);
    } catch (e) {
      const status = e.response?.status;
      let msg = "Không tải được danh sách.";
      if (status === 401) {
        msg =
          "Cần đăng nhập (lưu accessToken vào localStorage sau khi gọi /api/auth/login).";
      } else if (e.response?.data?.message) {
        msg = String(e.response.data.message);
      } else if (e.message) {
        msg = e.message;
      }
      setError(msg);
      setUsers([]);
      setTotalPages(0);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <UserTable
        onAddUser={openModal}
        users={users}
        loading={loading}
        error={error}
        page={page}
        totalPages={totalPages}
        totalElements={totalElements}
        onPageChange={setPage}
        onRetry={load}
      />
      <UserModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
