import { ADD_TASK,UPDATE_BLOCK_PRIORITY } from "./ActionType";

export function swimlaneReducer(state = [], { type, payload }) {
    switch (type) {
        case ADD_TASK:
            return [...state, payload];
        case UPDATE_BLOCK_PRIORITY:
            return state.map(item =>
                item.id === payload.id ? { ...item, priority: payload.priority } : item
            );
        default:
            return state;
    }
}
