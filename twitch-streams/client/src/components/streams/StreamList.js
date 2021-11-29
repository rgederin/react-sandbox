import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../actions";

const renderList = (streams, currentUserId, isSignedIn) => {
    return streams.map(stream => {
        return (
            <div className="item" key={stream.id}>
                {renderEditDeleteButtons(stream, currentUserId, isSignedIn)}

                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        )
    });
};

const renderEditDeleteButtons = (stream, currentUserId, isSignedIn) => {
    if (stream.userId === currentUserId && isSignedIn) {
        return (
            <div className="right floated content">
                <Link className="ui button primary" to={`/streams/edit/${stream.id}`}> Edit </Link>
                <button className="ui button negative">
                    Delete
                </button>
            </div>
        );
    }
};

const renderCreateButton = (isSignedIn) => {
    if (isSignedIn) {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="streams/new" className="ui button primary">
                    Create Stream
                </Link>
            </div>
        );
    }
};

const StreamList = () => {
    const dispatch = useDispatch();

    const streams = useSelector(state => Object.values(state.streams));
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const currentUserId = useSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(fetchStreams())
    }, []);

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList(streams, currentUserId, isSignedIn)}</div>
            {renderCreateButton(isSignedIn)}
        </div>
    );
};

export default StreamList;