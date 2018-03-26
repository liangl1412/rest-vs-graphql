import React from 'react';
import { render } from 'react-dom'
import Blog from './blog'
import store from './store'
import { Provider } from "react-redux"

render((
    <Provider store={store}>
        <Blog />
    </Provider>
), document.getElementById('root'));
