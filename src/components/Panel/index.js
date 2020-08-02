import React from 'react';

import './Panel.scss'
import Card from '../Card';
import AddForm from '../AddForm/index';

const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel_list">
        {items.map(item => <Card key={item.id}>{item.text}</Card>)}
      </div>
      <AddForm />
    </div>
  );
};

export default Panel;
