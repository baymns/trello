import { ADD_PANEL, REMOVE_PANEL, ADD_CARD } from '../actions/actionTypes';
const initialState = [
  {
    id: 0,
    title: 'Test',
    cards: [
      {
        id: 1,
        text: 'Help me',
      },
      {
        id: 2,
        text: 'Please',
      },
      {
        id: 3,
        text: 'OMG',
      },
      {
        id: 4,
        text: 'Help me',
      },
      {
        id: 5,
        text: 'I\'m done',
      },
      
     
    ]
  }
]
export const panelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PANEL:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          cards: []
        }
      ]
    case REMOVE_PANEL:
      return state.filter(panel => panel.id !== action.payload)
    case ADD_CARD:
      return state.map((panel) => {
        if (panel.id === action.payload.panelId) {
          return {
            ...panel,
            cards: [
              ...panel.cards,
              {
                id: action.payload.id,
                text: action.payload.text
              }
            ]
          }
        }
        return panel;
      })
    default:
      return state;
  }
}
