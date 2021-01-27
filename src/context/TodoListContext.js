import { createContext } from "react";
export const TodoListContext = createContext({
    deftodolist: [
        { id: 0, todo: "makan", is_complete: false },
        { id: 1, todo: "minum", is_complete: false },
        { id: 2, todo: "nabung", is_complete: true },
    ],
});
