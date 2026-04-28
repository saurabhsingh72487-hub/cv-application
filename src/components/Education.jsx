import { useState } from "react";
import "../styles/FormSection.css";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [edu, setEdu] = useState({
    school: "",
    study: "",
    date: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <section className="form-section">
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="school" value={edu.school} onChange={handleChange} placeholder="School" />
          <input name="study" value={edu.study} onChange={handleChange} placeholder="Study" />
          <input name="date" value={edu.date} onChange={handleChange} placeholder="Date" />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{edu.school}</p>
          <p>{edu.study}</p>
          <p>{edu.date}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}