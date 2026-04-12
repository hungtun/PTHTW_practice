import React from "react";

export default function UserTable({
  onAddUser,
  users = [],
  loading = false,
  error = null,
  page = 0,
  totalPages = 0,
  totalElements = 0,
  onPageChange,
  onRetry,
}) {
  const humanPage = totalPages > 0 ? page + 1 : 0;
  const canPrev = totalPages > 0 && page > 0;
  const canNext = totalPages > 0 && page < totalPages - 1;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white px-5 py-4 sm:px-6">
        <h2 className="text-base font-bold text-slate-900">Danh sách</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700"
          onClick={onAddUser}
        >
          <span className="text-lg leading-none">+</span> Thêm người dùng
        </button>
      </div>

      {error ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-100 bg-rose-50 px-5 py-3 text-sm text-rose-800 sm:px-6">
          <span>{error}</span>
          {onRetry ? (
            <button
              type="button"
              className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-800 transition hover:bg-rose-100"
              onClick={onRetry}
            >
              Thử lại
            </button>
          ) : null}
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/90">
              <th
                colSpan={2}
                className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6"
              >
                Người dùng
              </th>
              <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
                Liên hệ
              </th>
              <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
                Vai trò
              </th>
              <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
                Trạng thái
              </th>
              <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && users.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-slate-500"
                >
                  Đang tải dữ liệu…
                </td>
              </tr>
            ) : null}
            {!loading && !error && users.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-slate-500"
                >
                  Chưa có người dùng nào.
                </td>
              </tr>
            ) : null}
            {users.map((user) => (
              <React.Fragment key={user.id}>
                <tr className={user.mainRowClass}>
                  <td
                    rowSpan={user.note ? 2 : 1}
                    className="w-14 align-top px-4 py-4 sm:px-6"
                  >
                    <img
                      className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-slate-100"
                      src={user.avatar}
                      alt=""
                    />
                  </td>
                  <td className="px-2 py-4 pr-4 sm:pr-6">
                    <strong className="text-slate-900">{user.name}</strong>
                    <br />
                    <span className="text-xs text-slate-500">
                      {user.subtitle}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">
                    {user.email}
                    {user.phone ? (
                      <>
                        <br />
                        <span className="text-xs text-slate-500">
                          {user.phone}
                        </span>
                      </>
                    ) : null}
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${user.roleColor}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${user.statusColor}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    {user.actions === "disabled-only" ? (
                      <button
                        type="button"
                        className="cursor-not-allowed rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-400"
                        disabled
                      >
                        Không thể xóa
                      </button>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                          onClick={() => alert(`Xem ${user.id}`)}
                        >
                          Xem
                        </button>
                        {user.actions === "view-edit" ? (
                          <button
                            type="button"
                            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                            onClick={() => alert(`Sửa ${user.id}`)}
                          >
                            Sửa
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-rose-700"
                            onClick={() => alert(`Khóa ${user.id}`)}
                          >
                            Khóa
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
                {user.note ? (
                  <tr className="bg-slate-50/50">
                    <td
                      colSpan={5}
                      className="px-4 py-3 text-xs leading-relaxed text-slate-600 sm:px-6 sm:text-sm"
                    >
                      <span className="font-medium text-slate-700">
                        Ghi chú:
                      </span>{" "}
                      {user.note}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/50 px-5 py-4 sm:px-6"
        role="navigation"
        aria-label="Phân trang"
      >
        <span className="text-sm text-slate-500">
          {totalElements > 0
            ? `Tổng ${totalElements} người dùng`
            : "Không có bản ghi"}
        </span>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <span className="mr-1 text-sm text-slate-500">
            Trang {humanPage}
            {totalPages > 0 ? ` / ${totalPages}` : ""}
          </span>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!canPrev || loading}
            onClick={() => onPageChange?.(Math.max(0, page - 1))}
          >
            &laquo;
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!canNext || loading}
            onClick={() =>
              onPageChange?.(Math.min(totalPages - 1, page + 1))
            }
          >
            &raquo;
          </button>
        </div>
      </div>
    </section>
  );
}
