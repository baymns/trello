import React, { useState, useRef, useEffect } from 'react';
import Card from '../Card/index';
import Button from '../Button/index';
import { nanoid } from 'nanoid';
import './AddForm.scss';
import addIcon from '../../assets/plus-icon.png';
import closeIcon from '../../assets/close-icon.png';
import { addCard, addPanel } from '../../redux/actions/actionCreators';
import { useDispatch } from 'react-redux';

const AddForm = ({ panelId, isEmptyPanel }) => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [textarea, setTextarea] = useState('');
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm])
  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);
  const handleTextArea = ({ target: { value } }) => setTextarea(value);
  const handleNewCard = () => {
    dispatch(addCard(nanoid(), textarea, panelId));
    setTextarea('');
    setShowForm(false);
  }
  const handleNewPanel = () => {
    dispatch(addPanel(nanoid(), textarea));
    setTextarea('');
    setShowForm(false);
  }
  return (
    <>
      {showForm ? (
        <div className="add_form">
          <div className="add_form-input">
            <Card>
              <textarea ref={textareaRef} onChange={handleTextArea}
                value={textarea}
                name="text"
                placeholder={isEmptyPanel ? "Введите название колонки" : "Введите название карточки"}
                rows="3" />
            </Card>
          </div>
          <div className="add_form-bottom">
            {
              isEmptyPanel
                ?
                <Button onClick={handleNewPanel}>Добавить колонку</Button>
                :
                <Button onClick={handleNewCard}>Добавить карточку</Button>
            }
            <img src={closeIcon} alt="close" onClick={handleHideForm} />
          </div>
        </div>)
        : (
          <div className="add_form-bottom">
            <div className="add_button" onClick={() => setShowForm(true)}>
              <img src={addIcon} alt="add" onClick={handleShowForm} />
              <span>{isEmptyPanel ? 'Добавить колонку' : 'Добавить еще одну карточку'}</span>
            </div>
          </div>)
      }
    </>
  );
};

export default AddForm;
