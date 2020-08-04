import React, { useState, useEffect } from 'react';
import Card from '../Card';
import AddForm from '../AddForm/index';
import clearIcon from '../../assets/close-icon.png';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { removePanel } from '../../redux/actions/actionCreators';
import update from 'immutability-helper';
import './Panel.scss'

const Panel = ({ id, title, cards }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(cards);
  useEffect(() => {
    setItems(cards)
  }, [cards])
  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = items[dragIndex]
    setItems(() =>
      update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    )
  }

  return (
    <div className={classNames("panel", { "panel_empty": !cards })}>
      {title &&
        <div className="panel_title">
          <span>{title}</span>
          <img src={clearIcon} onClick={() => dispatch(removePanel(id))} alt="remove column" />
        </div>}
      {cards &&
        <div className="panel_list">
          {items.map((card, i) => <Card key={card.id} index={i} id={card.id} moveCard={moveCard}>{card.text}</Card>)}
        </div>}
      <AddForm isEmptyPanel={!cards} panelId={id} />
    </div>
  );
};

export default Panel;
