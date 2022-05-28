import './App.css';
import State from "./components/1-hooks/State";
import Reducer from "./components/1-hooks/Reducer";
import WelcomeDialog from "./components/2-composition/WelcomeDialog";
import ThankYouModal from "./components/3-composition/ThankYouModal";


function App() {
    return (
        <div className="App">
            <State />
            <Reducer />
            <WelcomeDialog />
            <ThankYouModal />
        </div>
    );
}

export default App;
