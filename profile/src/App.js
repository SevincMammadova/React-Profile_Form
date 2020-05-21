import React from 'react';
import Input from './components/input/Input';

function App() {
  return (
    <div className="welcome_page-container">
      <h1 className = 'welcomePage-header'>Welcome to our Team</h1>
      <Input
        type = {'submit'}
        id = {'submit_button'}
        className = {'submit_button'}
        value = {'Click me'}
      />
    </div>
  );
}

export default App;
