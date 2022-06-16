import Message1 from './Message1';
import Navbar from './Navbar/Navbar';
import Msg from './Msg'
import Psa from './Psa';
import Exam from './Condition/Exam';
import Exam1 from './Condition/Exam1';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Message1 />
      <hr />
      <Msg />
      <Psa />
      <Exam />
      <Exam1 />
    </div>
  );
}

export default App;
