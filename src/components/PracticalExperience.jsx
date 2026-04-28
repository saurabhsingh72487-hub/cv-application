import { useState } from "react";
import "../styles/FormSection.css";

export default function PracticalExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [exp, setExp] = useState({
    company: "",
    position: "",
    work: "",
    from: "",
    to: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setExp({ ...exp, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <section className="form-section">
      <h2>Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="company" value={exp.company} onChange={handleChange} placeholder="Company" />
          <input name="position" value={exp.position} onChange={handleChange} placeholder="Position" />
          <textarea name="work" value={exp.work} onChange={handleChange} placeholder="Work" />
          <input name="from" value={exp.from} onChange={handleChange} placeholder="From" />
          <input name="to" value={exp.to} onChange={handleChange} placeholder="To" />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{exp.company}</p>
          <p>{exp.position}</p>
          <p>{exp.work}</p>
          <p>{exp.from} - {exp.to}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}