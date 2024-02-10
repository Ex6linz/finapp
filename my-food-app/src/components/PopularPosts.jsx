import React, { useState, useEffect } from 'react';
import './PopularPosts.css';

function PopularPosts() {
    // This state will hold the popular blog posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch the popular posts from your backend or API
        // For now, we're using static data for illustration purposes
        const mockPosts = [
            { id: 1, title: 'Post 1', excerpt: 'This is the first post.' /* other post data */ },
            { id: 2, title: 'Post 2', excerpt: 'This is the second post.' /* other post data */ },
            // Add more posts as needed
        ];
        setPosts(mockPosts);
    }, []);

    return (
        <section className="blog-posts">
            {posts.map((post) => (
                <PopularPosts key={post.id} title={post.title} excerpt={post.excerpt} />
            ))}
        </section>
    );
}

export default PopularPosts;