import { useState } from "react";
import AddUserModal from "../../components/modals/user/AddUserModal";
import MainLayout from "../layout/MainLayout";
import UsersTable from "../../components/tables/user/UsersTable";
import EditUserModal from "../../components/modals/user/EditUserModal";
import type Users from "../../interfaces/Users";

const Users = () => {
  const [refreshUsers, setRefreshusers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);

  const handleOpenEditUserModal = (user: Users) => {
    setSelectedUser(user);
    setOpenEditUserModal(true);
  };

  const content = (
    <>
      <AddUserModal
        showModal={openAddUserModal}
        onRefreshUsers={() => setRefreshusers(!refreshUsers)}
        onClose={() => setOpenAddUserModal(false)}
      />
      <EditUserModal />
      <div className="d-flex justify-content-end mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpenAddUserModal(true)}
        >
          Add User
        </button>
      </div>
      <UsersTable
        refreshUsers={refreshUsers}
        onEditUser={handleOpenEditUserModal}
      />
    </>
  );

  return <MainLayout content={content} />;
};

export default Users;
