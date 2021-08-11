
// import './App.css';


import { Home } from "./pages/Home";
import { HashRouter,Route,Switch,Redirect} from "react-router-dom";
import { ContactDetails } from "./pages/ContactDetails";
import { Stats } from "./pages/Stats";
import { ContactApp } from "./pages/ContactApp";
import { ContactEdit } from "./pages/ContactEdit";
import { AppHeader } from "./cmps/AppHeader";
import { Signup } from "./pages/SignupPage";
import { connect } from "react-redux";

function _App({loggedInUser}) {
  const PrivateRoute = props => {
    
		return loggedInUser ? (
			<Route path={props.path} component={props.component} />
		) : (
			<Redirect to='/signup' />
		)
	}

  return (
    <HashRouter>
    <main>
    <AppHeader/>
    <Switch>
    
      <PrivateRoute path="/contacts/edit/:contactId?" component={ContactEdit}/>
      <PrivateRoute path="/contacts/:contactId" component={ContactDetails}/>
      <PrivateRoute path="/contacts" component={ContactApp}/>
      <PrivateRoute path="/stats" component={Stats}/>
      <Route path="/signup" component={Signup}/>
      <PrivateRoute path="/" component={Home}/>
    </Switch>
  </main>
</HashRouter>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  }
}

export const App = connect(mapStateToProps)(_App)

