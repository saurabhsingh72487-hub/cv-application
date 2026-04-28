import { useState } from "react";
import "../styles/FormSection.css";

export default function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <section className="form-section">
      <h2>General Info</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{info.name}</p>
          <p>{info.email}</p>
          <p>{info.phone}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}