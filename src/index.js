import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Students from './components/students';
import Subjects from './components/subjects';
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <div className="row m-0">
            <div className="col-sm-8 offset-sm-2 ">
                <Switch>
                    <Route path="/students/list" component={Students}></Route>
                    <Route path="/subjects/:student_id/list" component={Subjects}></Route>
                    <Route path="/" component={App}></Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>, document.getElementById('root'));
