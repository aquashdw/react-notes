import {Component} from "react";

export default class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {date: new Date()};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>ComponentLifeCycle <button onClick={this.handleClick}>Click</button></h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}