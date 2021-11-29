import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../actions";

const StreamEdit = (props) => {
    const dispatch = useDispatch();
    const streamId = props.match.params.id;
    const stream = useSelector (state => state.streams[streamId])

    useEffect(() => {
        dispatch(fetchStream(streamId))
    }, []);

    
    return (
        <div>StreamEdit</div>
    );
};

export default StreamEdit;