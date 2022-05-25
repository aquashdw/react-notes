import './App.css';
import Composition from "./components/4-props/Composition";
import BeforeComment from "./components/4-props/Extraction/BeforeComment";
import AfterComment from "./components/4-props/Extraction/AfterComment";

function App() {
    return (
        <div className="App">
            <Composition />
            <BeforeComment />
            <AfterComment />
        </div>
    );
}

export default App;
