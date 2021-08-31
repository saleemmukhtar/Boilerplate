import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Home from '../containers/Home'

function AppRouter() {
    return (

        <Router>
            <Switch>

                <Route exact path='/' component={Login}></Route>
                <Route exact path='/signup' component={Signup}></Route>
                <Route exact path='/home' component={Home}></Route>

            </Switch>
        </Router>
    )
}

export default AppRouter;