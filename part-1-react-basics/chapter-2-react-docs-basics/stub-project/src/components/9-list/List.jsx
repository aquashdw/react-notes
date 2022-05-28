function TodoItem(props) {
    return <li>{props.text}</li>
}

export default function List() {

    const todos = [
        { id: 1, text: "make bed" },
        { id: 2, text: "eat breakfast" },
        { id: 3, text: "drive car" },
        { id: 4, text: "develop software" },
        { id: 5, text: "go to bed" },
    ];

    // key is not props
    const todoList = todos.map(item => <TodoItem key={item.id} {...item} />);

    return <>{todoList}</>;
}