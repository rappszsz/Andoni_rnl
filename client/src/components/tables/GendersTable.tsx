const GendersTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <td>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <td>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <td>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
