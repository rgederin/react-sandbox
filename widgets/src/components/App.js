import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among developers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'greeb'
    },
    {
        label: 'The shade of blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
     
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options} />
        </div>
    );
};

export default App;