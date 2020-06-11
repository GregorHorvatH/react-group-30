import React, { Component } from 'react';
import News from './News';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  handleShowModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  openModal = () => {
    // setIsOpen(true);
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  closeModal = () => {
    // setIsOpen(false);
    console.log('close');
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <>
        <h1>App</h1>
        <News />

        <button onClick={this.handleShowModal}>Show modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>Close me!!!! :)</h1>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </>
    );
  }
}

export default App;
