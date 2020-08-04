import { ADD_CARD, REMOVE_PANEL, ADD_PANEL } from './actionTypes';

export const addCard = (id, text, panelId) => {
  return {
    type: ADD_CARD,
    payload: {
      id, text, panelId
    }
  }
}

export const addPanel = (id, title) => {
  return {
    type: ADD_PANEL,
    payload: {
      id, title
    }
  }
}
export const removePanel = (id) => {
  return {
    type: REMOVE_PANEL,
    payload: id
  }
}
