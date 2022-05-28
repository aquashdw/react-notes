import './App.css';
import Composition from "./components/4-props/Composition";
import BeforeComment from "./components/4-props/Extraction/BeforeComment";
import AfterComment from "./components/4-props/Extraction/AfterComment";
import ClassComponent from "./components/5-state/ClassComponent";
import ComponentLifeCycle from "./components/6-lifecycle/ComponentLifeCycle";
import FunctionalComponent from "./components/5-state/FunctionalComponent";
import Event from "./components/7-events/Event";

function App() {
    return (
        <div className="App">
            <ComponentLifeCycle />
            <ClassComponent />
            <FunctionalComponent />
            <Composition />
            <BeforeComment />
            <AfterComment />
            <Event />
        </div>
    );
}

export default App;
