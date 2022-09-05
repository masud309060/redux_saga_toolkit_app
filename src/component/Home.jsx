import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "../state/counter/counterSlice";
import {getPostData} from "../state/post/postSlice";

const Home = () => {
    const dispatch = useDispatch();
    const {value} = useSelector((state) => state.counter);
    const {posts, loading, error} = useSelector((state) => state.post);
    console.log({value, posts, loading, error});

    return (
        <div>
            <h2>Count: {value}</h2>

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch((incrementByAmount(5)))}>IncrementByFive</button>
            <button onClick={() => dispatch(getPostData())}>show posts</button>

            <h1>Post</h1>
            <div>
                {loading && <p>Loading...</p>}
                {posts !== null && posts.map(item => (
                    <p key={item.id}>{item.id}. {item.title}</p>
                ))}
            </div>
        </div>
    );
};

export default Home;