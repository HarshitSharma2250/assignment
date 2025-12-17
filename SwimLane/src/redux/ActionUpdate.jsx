import { FILTER_ITEMS_BY_PRIORITY, UPDATE_BLOCK_PRIORITY } from "./ActionType";





export const updateBlockPriority = (id, priority) => {
    return {
        type: UPDATE_BLOCK_PRIORITY,
        payload: { id, priority }
    };
};



export const filterItemsByPriority = (priority) => ({
  type: FILTER_ITEMS_BY_PRIORITY,
  payload: priority,
});