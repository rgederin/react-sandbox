import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPostsAndUsers());
    }, []);

    const renderPosts = posts.map(post => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        );
    });

    return (
        <div className="ui relaxed divided list">{renderPosts}</div>
    );
};

export default PostList;