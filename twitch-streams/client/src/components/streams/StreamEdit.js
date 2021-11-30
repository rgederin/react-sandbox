import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";


const StreamEdit = (props) => {
    const dispatch = useDispatch();
    const streamId = props.match.params.id;
    const stream = useSelector(state => state.streams[streamId])

    useEffect(() => {
        dispatch(fetchStream(streamId))
    }, []);

    const onSubmit = formValues => {
        dispatch(editStream(streamId, formValues))
    };


    if (!stream) {
        return <div>Loading...</div>
    };

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                initialValues={{ title: stream.title, description: stream.description }}
                onSubmit={onSubmit} />
        </div>
    );
};

export default StreamEdit;
