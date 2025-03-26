const DeleteGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="gender">Delete Gender</label>
          <input
            type="text"
            className="forn-control"
            id="gender"
            name="gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <td>
            <button type="button" className="btn btn-primary">
              Confirm
            </button>
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </td>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderForm;
