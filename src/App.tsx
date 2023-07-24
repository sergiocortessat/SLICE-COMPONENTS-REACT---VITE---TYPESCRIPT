import "./App.css";
import PageEditor from './components/PageEditor';
// wrap the componet with the redux store
import { Provider } from "react-redux";
import store from "./store/store";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PageEditor />
    </Provider>
  );
};

export default App;
