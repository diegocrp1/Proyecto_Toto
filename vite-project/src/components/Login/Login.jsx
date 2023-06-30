import { useState } from "react";
import PropTypes from "prop-types";
import { validate } from "../../assets/validation";

export default function Login({ loginAccess }) {
  const [focusedField, setFocusedField] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFocus = (event) => {
    const { name } = event.target;
    setFocusedField(name);
  };
  const handleBlur = () => {
    setFocusedField("");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors(
      validate({
        ...inputs,
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const aux = Object.keys(errors);
    if (!aux.length) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    }
    alert("Welcome to app Card Marker");
    loginAccess();
  };

  return (
    <div>
      <h1>CM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="email"
        />
        {focusedField==="email"&&errors.email && <span>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="current-password"
        />
        {focusedField==="password"&&errors.password && <span>{errors.password}</span>}
        <div>
          {Object.keys(errors).length === 0 ? (
            <button type="submit">Ingresar</button>
          ) : (
            <div>
              <div>insert info</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  loginAccess: PropTypes.func.isRequired,
};
