import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer'; //to show the second arg to the mapStateToProps method which is ownProps
import UsersContainer from './components/UsersContainer';


function App() {
  return (
    <Provider store={store}>
        <div className="App">
          {/* <CakeContainer />
          <HooksCakeContainer/>
          <IceCreamContainer />
          <NewCakeContainer />
          <ItemContainer cake />
          <ItemContainer iceCream /> */}
          <UsersContainer />
        </div>
    </Provider>
    
  );
}

export default App;
