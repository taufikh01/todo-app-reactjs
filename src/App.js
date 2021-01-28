import "./index.css";
import GlobalContextProvider from "./context/GlobalContext";
import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Nav from "./components/Nav";

function App() {
    return (
        <GlobalContextProvider>
            <GlobalContext.Consumer>
                {({ darkMode }) => (
                    <div
                        className={`h-screen ${
                            darkMode
                                ? "bg-veryDarkBlue"
                                : "bg-veryLightGrayishBlue"
                        }`}
                    >
                        <div
                            className={`absolute w-full bg-cover py-28 ${
                                darkMode ? "bg-mobile-dark" : "bg-mobile-light"
                            } md:${
                                darkMode
                                    ? "bg-desktop-dark"
                                    : "bg-desktop-light"
                            }`}
                        ></div>
                        <div className="relative w-10/12 mx-auto top-16 sm:w-10/12 md:w-8/12 lg:w-4/12">
                            <Header />
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
                        </div>
                    </div>
                )}
            </GlobalContext.Consumer>
        </GlobalContextProvider>
    );
}
export default App;
