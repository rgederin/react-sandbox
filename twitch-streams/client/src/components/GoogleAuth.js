import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = () => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.auth.isSignedIn);

    let auth;

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '865433380030-gf5s380rcd9696ckm1o2tk9t7jcfbi84.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    }, []);

    const onAuthChange = signedIn => {
        if (signedIn) {
            dispatch(signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId()));
        } else {
            dispatch(signOut());
        }
    };

    const onSignInClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();

    };

    const onSignOutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    const renderAuthLink = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={onSignOutClick}>
                    <i className="google icon" />
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={onSignInClick}>
                    <i className="google icon" />
                    Sign in
                </button>
            );
        }
    };

    return (
        <div>{renderAuthLink()} </div>
    );
};

export default GoogleAuth;