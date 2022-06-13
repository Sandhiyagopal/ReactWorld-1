import Message1 from './Message1';
import Navbar from './Navbar/Navbar';
import Msg from './Msg'
import State1 from './State/State1';
import User from './Props/User';
import Product from './Product/Product';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Message1 />
      <hr />
      <State1 />
      <Msg />
      <Product />
      <User />
    </div>
  );
}

export default App;
