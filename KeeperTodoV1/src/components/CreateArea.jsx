import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...Note, [name]: value });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={Note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={Note.content}
          onChange={handleChange}
        />
        <button
          onClick={e => {
            props.onAdd(Note);
            e.preventDefault();
            setNote({title: '', content: ''})
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
