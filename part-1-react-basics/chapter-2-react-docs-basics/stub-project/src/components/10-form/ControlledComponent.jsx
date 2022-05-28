import {useState} from "react";

export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");
    const [flavor, setFlavor] = useState("coconut");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEssay: ${essay}\nFlavor: ${flavor}`);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEssay = (e) => {
        setEssay(e.target.value);
    }

    const handleChangeFlavor = (e) => {
        setFlavor(e.target.value);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
        </div>
        <div>
            <label>
                Essay:
                <textarea value={essay} onChange={handleChangeEssay} />
            </label>
        </div>
        <div>
            <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={handleChangeFlavor}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
        </div>
        <input type="submit" value="Submit" />
    </form>;
}