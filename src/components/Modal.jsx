import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Intro from '../pages/Intro';

const customStyles = {
  modal: {
    padding: '0',
    borderRadius: '0',
    maxWidth: 'none',
    width: '50%',
    height: '50%',
    margin: 'auto',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
};

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="fixed top-10 left-0 w-full h-full flex items-center justify-center">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        styles={customStyles}
        classNames={{
          modal: 'bg-primary text-white px-8 py-12 rounded-lg shadow-lg',
        }}
      >
        <div className="p-4">
          <Intro />
        </div>
      </Modal>
    </div>
  );
};

export default App;
