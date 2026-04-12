import Breadcrumbs from "../components/Breadcrumbs";
import FilterSection from "../components/FilterSection";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import CMSNotification from "../components/CMSNotification";

export default function Users() {
  return (
    <>
      <Breadcrumbs />
      <FilterSection />
      <UserList />
      <UserForm />
      <CMSNotification />
    </>
  );
}
