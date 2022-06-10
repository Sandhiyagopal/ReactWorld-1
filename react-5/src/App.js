import Msg from './Message/Msg'
import Message1 from './Message/Message1';
import Message2 from './Message/Message2';
import Navbar from './Navbar/Navbar';
import CompC from './Clsprops/CompC'

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Message2 />
      <Msg />
      <Message1 />
      <hr />
      <CompC />
    </div>
  );
}

export default App;
