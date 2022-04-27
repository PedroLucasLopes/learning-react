import React from 'react';
import './style.css';

const formFields = [
  {
    id: 'name',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'password',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'zipcode',
    label: 'CEP',
    type: 'text'
  },
  {
    id: 'street',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'number',
    label: 'Numero',
    type: 'number'
  },
  {
    id: 'district',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'city',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'state',
    label: 'Estado',
    type: 'text'
  }
]

function App() {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: ''
      }
    }, {})
  );

  const [response, setResponse] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => setResponse(response))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          formFields.map(({ id, label, type }) => {
            return (
              <div className={id} key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} name={id} id={id} value={form[id]} onChange={handleChange} />
              </div>
            )
          })
        }
        {response && response.ok && <p>Formulário Enviado</p>}
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
