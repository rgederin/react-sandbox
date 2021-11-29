import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStream } from "../../actions/index"
import StreamForm from "./StreamForm";

const StreamCreate = props => {
    const dispatch = useDispatch();

    const onSubmit = formValues => {
        dispatch(createStream(formValues))
    };

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    );
};


export default StreamCreate;