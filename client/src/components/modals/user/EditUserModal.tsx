import EditUserForm from "../../forms/user/EditUserForm";

const EditUserModal = () => {
  return (
    <>
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add User
              </h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                {/* <AlertMessage
                  message={message}
                  isSuccess={isSuccess}
                  isVisible={isVisible}
                  onClose={handleCloseAlertMessage} */}
                />
              </div>
              <EditUserForm />
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
              >
                Close
              </button>
              {/* <button
                type="submit"
                className="btn btn-primary"
                disabled={loadingStore}
                onClick={() => submitFormRef.current?.()}
              >
                {loadingStore ? (
                  <>
                    <SpinnerSmall /> Saving User...
                  </>
                ) : (
                  "Save User"
                )}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserModal