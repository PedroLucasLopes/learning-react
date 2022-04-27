import React from 'react';

function App() {
  const [cores, setCores] = React.useState([]);
  const coresArr = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      <form>
        {coresArr.map((el, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={el}
                checked={cores.includes(el)}
                onChange={handleChange}
              />
              {el}
            </label>
          )
        })}
      </form>
    </>
  );
}

export default App;
