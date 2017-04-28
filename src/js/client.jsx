import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import Todo from './components/Todo.jsx';
import './store/counter.jsx';

var app = document.getElementById('app');



ReactDOM.render(
    <div>
      <App/>
    </div>
 ,app);


if(module.hot){
  module.hot.accept();
}
