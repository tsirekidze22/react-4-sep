import { Link, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <section className="flex">
      <nav className="w-80 flex flex-col p-4 border-2 border-green-2 ">
        <Link className="m-1 bg-gray-200 rounded-xl p-1" to={"/admin"}>
          Dashboard
        </Link>
        <Link className="m-1 bg-gray-200 rounded-xl p-1" to={"/admin/users"}>
          Users
        </Link>
        <Link className="m-1 bg-gray-200 rounded-xl p-1" to={"/admin/orders"}>
          Orders
        </Link>
      </nav>

      <main className="w-full h-screen border-2 border-red-600">
        <Outlet />
      </main>
    </section>
  );
};

export default AdminLayout;
