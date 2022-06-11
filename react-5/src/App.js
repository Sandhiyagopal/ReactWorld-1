import Message1 from './Message1';
import Navbar from './Navbar/Navbar';
import Eventbind from '../../Backup/Eventbind/Eventbind';
import Event from '../../Backup/Eventbind/Event';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Message1 />
      <hr />
      <Eventbind />
      <Event />
    </div>
  );
}

export default App;
