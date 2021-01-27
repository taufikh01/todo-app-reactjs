import { ThemeContext } from "./context/ThemeContext";
import { TodoListContext } from "./context/TodoListContext";
import { useContext, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const { deftodolist } = useContext(TodoListContext);
    const [darkMode, setDarkMode] = useState(true);
    const [todolist, setTodolist] = useState(deftodolist);
    let bgDesktop = darkMode ? "bg-desktop-dark" : "bg-desktop-light";
    let bgMobile = darkMode ? "bg-mobile-dark" : "bg-mobile-light";
    let foreground = darkMode ? "bg-veryDarkBlue" : "bg-veryLightGrayishBlue";
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={`h-screen ${foreground}`}>
                <div
                    className={`absolute w-full bg-cover py-28 ${bgMobile} md:${bgDesktop}`}
                ></div>
                <div className="relative w-10/12 mx-auto top-16 sm:w-10/12 md:w-8/12 lg:w-4/12">
                    <Header />
                    <TodoListContext.Provider value={{ todolist, setTodolist }}>
                        <AddTodo />
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Todo />
                                </Route>
                                <Route exact path="/active">
                                    <Todo status="active" />
                                </Route>
                                <Route exact path="/completed">
                                    <Todo status="completed" />
                                </Route>
                            </Switch>
                            <Nav />
                        </Router>
                    </TodoListContext.Provider>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
