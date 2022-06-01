import './App.css';
import State from "./components/1-hooks/State";
import Reducer from "./components/1-hooks/Reducer";
import WelcomeDialog from "./components/2-composition/WelcomeDialog";
import ThankYouModal from "./components/3-composition/ThankYouModal";
import Button from "./components/4-hoc/Button";
import Input from "./components/4-hoc/Input";
import Memo from "./components/5-memoization/Memo";


function App() {
    return (
        <div className="App">
            <State />
            <Reducer />
            <WelcomeDialog />
            <ThankYouModal /><br />
            <Input />
            <Button />
            <Memo />
        </div>
    );
}

export default App;
