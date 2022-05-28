import './App.css';
import Composition from "./components/4-props/Composition";
import BeforeComment from "./components/4-props/Extraction/BeforeComment";
import AfterComment from "./components/4-props/Extraction/AfterComment";
import ClassComponent from "./components/5-state/ClassComponent";
import ComponentLifeCycle from "./components/6-lifecycle/ComponentLifeCycle";
import FunctionalComponent from "./components/5-state/FunctionalComponent";
import Event from "./components/7-events/Event";
import Condition from "./components/8-conditional-render/Condition";
import List from "./components/9-list/List";
import ControlledComponent from "./components/10-form/ControlledComponent";
import UnControlledComponent from "./components/10-form/UnControlledComponent";
import MultiInputComponent from "./components/10-form/MultiInputComponent";

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
            <Condition />
            <List />
            <ControlledComponent />
            <UnControlledComponent />
            <MultiInputComponent />
        </div>
    );
}

export default App;
