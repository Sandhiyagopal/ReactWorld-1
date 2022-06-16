import Message1 from './Message1';
import Navbar from './Navbar/Navbar';
import Msg from './Msg'
import ListRender1 from './ListRender/ListRender1';
import ListRender2 from './ListRender/ListRender2';
import ListRender3 from './ListRender/ListRender3';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <hr />
      <Message1 />
      <hr />
      <Msg />
      <hr />
      <ListRender1 />
      <hr />
      <ListRender2 />
      <hr />
      <ListRender3 />
    </div>
  );
}

export default App;
