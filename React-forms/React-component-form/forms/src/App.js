import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [color, setColor] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [lang, setLang] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido.')
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('enviou')
    } else {
      console.log('nao enviou')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Checkbox
          options={['Javascript', 'PHP', 'Python']}
          value={lang}
          setValue={setLang}
        />
        <Radio
          options={['Azul', 'Vermelho']}
          value={color}
          setValue={setColor}
        />

        <Select
          items={['Notebook', 'Smartphone']}
          value={produto}
          setValue={setProduto}
        />

        <Input
          id='name'
          label='Nome'
          value={name}
          setValue={setName}
          input='text'
          required
        />

        <Input
          id='email'
          label='Email'
          value={email}
          setValue={setEmail}
          input='email'
          required
        />

        <Input
          id='cep'
          label='Cep'
          value={cep}
          setValue={setCep}
          input='text'
          onBlur={handleBlur}
          placeholder='00000-000'
        />

        {error && <p>{error}</p>}

        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default App;
