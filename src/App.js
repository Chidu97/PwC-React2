import './App2.css'
import Counter from './features/counter/Counter';
import Display from './features/counter/Display';
import Header from './components/Header';
import Color from './components/Color';
import SimpleCounter from './components/SimpleCounter';
import CounterUseReducer from './components/CounterUseReducer';
import TodoUseReducer from './components/TodoUseReducer';
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Counter />
      <Display /> */}
      {/* <Color />  */}
      {/* <SimpleCounter /> */}
      <CounterUseReducer />
      <hr />
      <TodoUseReducer />
    </div>
  );
}

export default App;
