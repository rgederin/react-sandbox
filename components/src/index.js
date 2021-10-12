import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
    return (

        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure about this?
                </div>
            </ApprovalCard>


            <ApprovalCard>
                <Comment
                    author="Ruslan"
                    timeAgo="few minutes..."
                    text="Nice content!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Dima"
                    timeAgo="Yesterday"
                    text="Piece of shit"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Lera"
                    timeAgo="Last week"
                    text="I get your ass!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'))