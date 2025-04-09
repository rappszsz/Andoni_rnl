import { useEffect, useState } from "react";
import ErrorHandler from "../../../handler/ErrorHandler";
import GenderService from "../../../services/GenderService";
import Genders from "../../../interfaces/Gender";
import UserFieldErrors from "../../../interfaces/UserFieldErrors";

const AddUserForm = () => {
  const [state, setState] = useState({
    loadingGenders: true,
    genders: [] as Genders[],
    first_name: "",
    middle_name: "",
    last_name: "",
    suffix_name: "",
    birth_date: "",
    gender: "",
    address: "",
    contact_number: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: {} as UserFieldErrors,
  });

  const handleLoadGenders = () => {
    GenderService.loadGenders()
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            genders: res.data.genders,
          }));
        } else {
          console.error(
            "Unexpected Status Error While Loading Genders: ",
            res.status
          );
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingGenders: false,
        }));
      });
  };

  useEffect(() => {
    handleLoadGenders();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.first_name ? "is-invalid" : ""
              }`}
              name="first_name"
              id="first_name"
            />
            {state.errors.first_name && (
              <span className="text-danger">{state.errors.first_name[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="middle_name">Middle Name</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.middle_name ? "is-invalid" : ""
              }`}
              name="middle_name"
              id="middle_name"
            />
            {state.errors.middle_name && (
              <span className="text-danger">{state.errors.middle_name[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.last_name ? "is-invalid" : ""
              }`}
              name="last_name"
              id="last_name"
            />
            {state.errors.last_name && (
              <span className="text-danger">{state.errors.last_name[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="suffix_name">Suffix Name</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.suffix_name ? "is-invalid" : ""
              }`}
              name="suffix_name"
              id="suffix_name"
            />
            {state.errors.suffix_name && (
              <span className="text-danger">{state.errors.suffix_name[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="birth_date">Birth Date</label>
            <input
              type="date"
              className={`form-control ${
                state.errors.birth_date ? "is-invalid" : ""
              }`}
              name="bitrh_date"
              id="birth_date"
            />
            {state.errors.birth_date && (
              <span className="text-danger">{state.errors.birth_date[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="gender">Gender</label>\
            <select
              className={`form-control ${
                state.errors.gender ? "is-invalid" : ""
              }`}
              name="gender"
              id="gender"
            >
              <option value="">Select Gender</option>
              {state.loadingGenders ? (
                <option value="">Loading...</option>
              ) : (
                state.genders.map((gender, index) => (
                  <option value={gender.gender_id} key={index}>
                    {gender.gender}
                  </option>
                ))
              )}
            </select>
            {state.errors.gender && (
              <span className="text-danger">{state.errors.gender[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.address ? "is-invalid" : ""
              }`}
              name="adress"
              id="address"
            />
            {state.errors.address && (
              <span className="text-danger">{state.errors.address[0]}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="contact_number">Contact Number</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.contact_number ? "is-invalid" : ""
              }`}
              name="contact_number"
              id="contact_number"
            />
            {state.errors.contact_number && (
              <span className="text-danger">
                {state.errors.contact_number[0]}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.email ? "is-invalid" : ""
              }`}
              name="email"
              id="email"
            />
            {state.errors.email && (
              <span className="text-danger">{state.errors.email[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${
                state.errors.password ? "is-invalid" : ""
              }`}
              name="password"
              id="password"
            />
            {state.errors.password && (
              <span className="text-danger">{state.errors.password[0]}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
              type="passowrd"
              className={`form-control ${
                state.errors.password_confirmation ? "is-invalid" : ""
              }`}
              name="password_confirmation"
              id="password_confirmation"
            />
            {state.errors.password_confirmation && (
              <span className="text-danger">
                {state.errors.password_confirmation[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
