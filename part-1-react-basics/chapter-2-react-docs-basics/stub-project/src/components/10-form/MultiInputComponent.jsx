import React from "react";

export default function MultiInputComponent() {
    const [name, setName] = React.useState("");
    const [essay, setEssay] = React.useState("Please write an essay about your favorite DOM element.");
    const [flavor, setFlavor] = React.useState("coconut");

    const handleChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        switch (targetName) {
            case "name":
                setName(targetValue);
                break;
            case "essay":
                setEssay(targetValue);
                break;
            case "flavor":
                setFlavor(targetValue);
                break;
            default:
                throw new Error("Not Implemented");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEssay: ${essay}\nFlavor: ${flavor}`);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
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