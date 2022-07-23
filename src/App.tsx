import React from 'react';
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from './components/TodoItemPage';

const App = () => {

        return (
            <BrowserRouter>
                <div>
                    <Link to="/users">Users</Link>
                    <Link to="/todos">Todos</Link>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos'} element={<TodoPage/>}/>
                    <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
;

export default App;
