import React from "react";
import Accordion from "./Accordion";
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


const App = () => {
    return (
        <div>
            <h1>Widget App component</h1>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    );
};

export default App;