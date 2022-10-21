import {Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

export default function Routes() {
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/new' component={NewContact} />
            <Route path='/edit' component={EditContact} />
        </Switch>
    );
}