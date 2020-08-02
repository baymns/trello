import React, { useState, useRef, useEffect } from 'react';
import Card from '../Card/index';
import Button from '../Button/index';

import './AddForm.scss';
import addIcon from '../../assets/plus-icon.png';
import closeIcon from '../../assets/close-icon.png';

const AddForm = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm])
  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);
  return (
    <>
      {showForm ? (
        <div className="add_form">
          <div className="add_form-input">
            <Card>
              <textarea ref={textareaRef} placeholder="Введите название карточки" rows="3" />
            </Card>
          </div>
          <div className="add_form-bottom">
            <Button>Добавить карточку</Button>
            <img src={closeIcon} alt="close" onClick={handleHideForm} />


          </div>
        </div>)
        : (
          <div className="panel_bottom">
            <div className="add_button" onClick={() => setShowForm(true)}>
              <img src={addIcon} alt="add" onClick={handleShowForm} />

              <span>Добавить еще одну карточку</span>
            </div>
          </div>)
      }
    </>
  );
};

export default AddForm;
