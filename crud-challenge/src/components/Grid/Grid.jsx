import React, { useEffect, useState } from 'react'
import { Wrapper } from './GridStyles'
import Card from '../Card/Card';
import axios from 'axios';

function Grid() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((res) => {
                setPosts(res.data);
            })
    }, []);

    return (
        <Wrapper>
            <h1 style={{ margin:"1rem" }}>Posts</h1>
            <div>
                {posts.length === 0 ?
                    <h1>There are no posts</h1> :
                    posts.map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} desc={post.desc} />
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Grid