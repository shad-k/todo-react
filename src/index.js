import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store, { history } from './store';

import './index.css';
import App from './Components/App';

const Root = () => {
    return (
    	<Provider store={store}>
    		<Router history={history}>
    			<Route path='/' component={App} />
    		</Router>
    	</Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
