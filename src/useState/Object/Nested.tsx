import React from "react";

const Nested = () => {
  const [person, setPerson] = React.useState({
    name: "Peter",
    artwork: {
      title: "The Artist",
      city: "Paris",
      image: "https://picsum.photos/200/300",
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleArtWorkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        [name]: value,
      },
    });
  };
  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleArtWorkChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleArtWorkChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleArtWorkChange}
        />
      </label>
      <br />
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};

export default Nested;
