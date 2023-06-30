import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateCreate } from "../../assets/validateCreate";

export default function FormCreate({
  addCharacter,
  editCharacter,
  deleteChar,
  characters,
}) {
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();
  const { type } = useParams();
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    age: "",
    force: "",
    img: "",
    name_search: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    age: "",
    force: "",
    img: "",
  });

  function handleFocus(event) {
    const { name } = event.target;
    setFocusedField(name);
  }

  function handleBlur() {
    setFocusedField("");
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors(
      validateCreate({
        ...inputs,
        [name]: value,
      })
    );
  }

  function search(name) {
    let character = characters.find((ch) => ch.name == name);
    character.name_search = inputs.name_search;
    setInputs(character);
    setErrors({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length===0) {
      if (type === "edit") {
        editCharacter(inputs);
        alert("is Edit");
      } else if (type === "delete") {
        deleteChar(inputs.name_search);
        alert("is Delete");
      } else {
        addCharacter(inputs);
        alert("is Create");
      }
      setInputs({
        id: "",
        name: "",
        age: "",
        force: "",
        img: "",
        name_search: "",
      });
      setErrors({
        id: "",
        name: "",
        age: "",
        force: "",
        img: "",
      });
      navigate("/home");
      return;
    }
    return alert("Error");
  }

  return (
    <div>
      {type === "edit" || type === "delete" ? (
        <div>
          <label htmlFor="name_search">Select Name:</label>
          <input
            type="text"
            name="name_search"
            value={inputs.name_search}
            onChange={handleInput}
            placeholder="Insert name search"
          />
          <button onClick={() => search(inputs.name_search)}>Search</button>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {focusedField === "name" && errors.name && <p>{errors.name}</p>}
        <label htmlFor="age"></label>
        <input
          type="text"
          name="age"
          value={inputs.age}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {focusedField === "age" && errors.age && <p>{errors.age}</p>}
        <label htmlFor="force"></label>
        <input
          type="text"
          name="force"
          value={inputs.force}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {focusedField === "force" && errors.force && <p>{errors.force}</p>}

        <label htmlFor="img"></label>
        <input
          type="text"
          name="img"
          value={inputs.img}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {focusedField === "img" && errors.img && <p>{errors.img}</p>}
        {Object.keys(errors).length === 0 ? (
          type === "edit" ? (
            <button type="submit">Edit</button>
          ) : (
            type === "create" && <button type="submit">Create</button>
          )
        ) : null}
        {inputs.name_search.length === 0
          ? null
          : type === "delete" && <button type="submit">Delete</button>}
      </form>
    </div>
  );
}

FormCreate.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  editCharacter: PropTypes.func.isRequired,
  deleteChar: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};
