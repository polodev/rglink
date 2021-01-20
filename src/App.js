import './App.css';
import LinkTabs from './components/LinkTabs'
import PasswordComponent from './components/PasswordComponent'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <PasswordComponent>
            <LinkTabs/>
        </PasswordComponent>
      </div>
    </div>
  );
}

export default App;
