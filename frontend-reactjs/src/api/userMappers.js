const ROLE_LABEL = {
  ADMIN: "Quản trị",
  USER: "Người dùng",
};

const ROLE_COLOR = {
  ADMIN: "bg-violet-50 text-violet-800 ring-violet-600/15",
  USER: "bg-emerald-50 text-emerald-800 ring-emerald-600/15",
};

// Maps Spring Data Page JSON (content[]) to UserTable row shape.
export function mapUsersPageToTableRows(pageData) {
  const list = pageData?.content ?? [];
  return list.map((u, index) => mapUserResponseToTableRow(u, index));
}

function mapUserResponseToTableRow(u, index) {
  const roleKey = u.role === "ADMIN" ? "ADMIN" : "USER";
  const mainRowClass =
    index % 2 === 0
      ? "bg-white transition hover:bg-slate-50/80"
      : "transition hover:bg-slate-50/80";

  const updatedNote = u.updatedAt
    ? `Cập nhật: ${new Date(u.updatedAt).toLocaleString("vi-VN")}`
    : null;

  return {
    id: String(u.id),
    name: u.fullName || u.username,
    subtitle: u.username,
    email: u.email,
    phone: null,
    role: ROLE_LABEL[roleKey] ?? roleKey,
    status: "Hoạt động",
    note: updatedNote,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(u.username)}`,
    roleColor: ROLE_COLOR[roleKey] ?? ROLE_COLOR.USER,
    statusColor: "bg-green-50 text-green-800 ring-green-600/15",
    mainRowClass,
    actions: roleKey === "ADMIN" ? "view-lock" : "view-edit",
  };
}
