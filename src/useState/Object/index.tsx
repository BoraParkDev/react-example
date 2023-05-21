import React, { useState } from "react";

const ObjectIndex = () => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Park",
    email: "abc@email.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <label>
        First Name :&nbsp;
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name :&nbsp;
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email :&nbsp;
        <input type="email" value={form.email} onChange={handleChange} />
      </label>
      <p>
        {form.firstName} {form.lastName} {form.email}
      </p>
    </form>
  );
};

export default ObjectIndex;
