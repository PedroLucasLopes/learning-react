import React from 'react';
import Button from './Button.js';
import Modal from './Modal.js';

function App() {
  const [modal, setModal] = React.useState(false)

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <Button setModal={setModal} />
    </>
  );
}

export default App;
