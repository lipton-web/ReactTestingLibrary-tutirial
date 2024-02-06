import logo from "./logo.svg";
import "./App.css";
import MyPage from "./component/MyPage";
import UserList from "./component/UserList";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <MyPage user={{ name: "Kim" }} />
      <UserList users={["Tom", "Jane", "Mike"]} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
