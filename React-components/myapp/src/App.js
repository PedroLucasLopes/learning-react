import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form';

function App() {
  return (
    <>
      <Header cor='red' texto='Textinho'>
        Children
      </Header>
      <Form label={'nome'} />
      <Footer />
    </>
  );
}

export default App;
