import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      { isModalVisible ? (
      <Modal onClose= { () => setIsModalVisible(false)}>
        <div>
          <h2>Modal do App</h2>
        </div>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h2>Botões footer</h2>
        </div>
      </Modal> 
      ) : null}
    </div>
  );
}

export default App;
