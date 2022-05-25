import './App.css';
import Composition from "./components/4-props/Composition";
import BeforeComment from "./components/4-props/Extraction/BeforeComment";
import AfterComment from "./components/4-props/Extraction/AfterComment";
import ClassComponent from "./components/5-state/ClassComponent";
import FunctionalComponent from "./components/5-state/FunctionalComponent";

function App() {
    return (
        <div className="App">
            <ClassComponent />
            <FunctionalComponent />
            <Composition />
            <BeforeComment />
            <AfterComment />
        </div>
    );
}

export default App;
