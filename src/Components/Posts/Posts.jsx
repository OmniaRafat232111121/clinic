import React from 'react';
import post1 from '../../assets/post-1.jpg'
import post2 from '../../assets/post-2.jpg'
import post3 from '../../assets/post-3.jpg'
import post4 from '../../assets/post-4.avif';
import post5 from '../../assets/post-5.avif'
import post6 from '../../assets/post-6.avif'



const ClinicPosts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: post1,
      title: 'Medicine',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imageUrl:post2,
      title: 'surgery',
      body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        id: 3,
        imageUrl:post3,
        title: 'clinics',
        body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
      {
        id: 4,
        imageUrl: post4,
        title: 'Pediatrics',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 5,
        imageUrl:post5,
        title: 'Dental',
        body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
      {
          id: 6,
          imageUrl:post6,
          title: 'General Checkup',
          body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Clinic Posts</h2>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg p-4">
              <img src={post.imageUrl} alt={`Post ${post.id}`} className="w-full h-48 object-cover rounded-lg mb-4" />
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