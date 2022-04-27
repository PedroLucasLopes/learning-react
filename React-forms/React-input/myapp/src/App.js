import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    name: '',
    email: ''
  })

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            value={form.name}
            id="name"
            name="name"
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={form.email}
            id="email"
            name="email"
            onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
