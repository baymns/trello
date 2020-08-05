import React, { useImperativeHandle, useRef } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import './Card.scss'
import { ItemTypes } from './ItemTypes';

const Card = React.forwardRef(({ children, isDragging, connectDragSource, connectDropTarget }, ref) => {
  const elementRef = useRef(null);
  connectDragSource(elementRef);
  connectDropTarget(elementRef);
  const opacity = isDragging ? 0 : 1;
  useImperativeHandle(ref, () => ({
    getNode: () => elementRef.current,
  }));
  return (
    <div ref={elementRef} className="card" style={{ opacity }}>
      {children}
    </div>
  );
},
)

export default DropTarget(
  ItemTypes.CARD,
  {
    hover(props, monitor, component) {
      if (!component) {
        return null
      }
      // node = HTML Div element from imperative API
      const node = component.getNode()
      if (!node) {
        return null
      }
      const dragIndex = monitor.getItem().index
      const hoverIndex = props.index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = node.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Выполняйте перемещение только тогда, когда мышь пересекла половину высоты элементов
      // При перетаскивании вниз перемещайтесь только тогда, когда курсор находится ниже 50%
      // При перетаскивании вверх перемещайтесь только тогда, когда курсор находится выше 50%
      // Перетаскивание вниз
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex)
      // Примечание: мы мутируем элемент monitor здесь!
      // Как правило, это лучше, чтобы избежать мутации,
      // но здесь это делается ради производительности,
      // чтобы избежать дорогостоящего индексного поиска.
      monitor.getItem().index = hoverIndex
    },
  },
  (connect) => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    ItemTypes.CARD,
    {
      beginDrag: (props) => ({
        id: props.id,
        index: props.index,
      }),
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)


// export default Card;
