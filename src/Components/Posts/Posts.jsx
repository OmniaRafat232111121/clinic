import React, { useState, useEffect } from 'react';

const ClinicPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Clinic Posts</h2>
      {posts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg p-4">
            <img src={`https://picsum.photos/400/250?random=${post.id}`} alt={`Post ${post.id}`} className="w-full h-48 object-cover rounded-lg mb-4" />

              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No posts available.</p>
      )}
    </div>
  );
};

export default ClinicPosts;