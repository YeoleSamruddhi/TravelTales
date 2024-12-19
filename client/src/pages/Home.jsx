// import { Link } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch('/api/post/getPosts');
//       const data = await res.json();
//       setPosts(data.posts);
//     };
//     fetchPosts();
//   }, []);
//   return (
//     <div>
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
//         <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
//         <p className='text-gray-500 text-xs sm:text-sm'>
//           Here you'll find a variety of articles and tutorials on topics such as
//           web development, software engineering, and programming languages.
//         </p>
//         <Link
//           to='/search'
//           className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
//         >
//           View all posts
//         </Link>
//       </div>
//       <div className='p-3 bg-amber-100 dark:bg-slate-700'>
//         <CallToAction />
//       </div>

//       <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//         {posts && posts.length > 0 && (
//           <div className='flex flex-col gap-6'>
//             <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
//             <div className='flex flex-wrap gap-4'>
//               {posts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//             </div>
//             <Link
//               to={'/search'}
//               className='text-lg text-teal-500 hover:underline text-center'
//             >
//               View all posts
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { Link } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch('/api/post/getPosts');
//       const data = await res.json();
//       setPosts(data.posts);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center'>
//         <h1 className='text-3xl font-bold lg:text-6xl text-teal-500'>
//           Discover. Learn. Build.
//         </h1>
//         <p className='text-gray-600 text-sm sm:text-lg font-semibold italic'>
//           "Unleashing creativity through code and ideas, one blog at a time."
//         </p>
//         <Link
//           to='/search'
//           className='text-sm sm:text-md text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600 transition'
//         >
//           Explore All Posts
//         </Link>
//       </div>

//       {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
//         <CallToAction />
//       </div> */}

//       <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//         {posts && posts.length > 0 && (
//           <div className='flex flex-col gap-6'>
//             <h2 className='text-2xl font-semibold text-center text-teal-500'>
//               Recent Posts
//             </h2>
//             <div className='flex flex-wrap gap-4 justify-center'>
//               {posts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//             </div>
//             <Link
//               to={'/search'}
//               className='text-lg text-teal-500 hover:underline text-center'
//             >
//               View all posts
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const sliderImages = [
    '/images/home/homepage_1.jpg',
    '/images/home/homepage_2.jpg',
    '/images/home/homepage_3.jpg',
    '/images/home/homepage_4.jpg',
  ];
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div 
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?nature,abstract')" }}
    >
      {/* Header Section */}
      <div className='relative flex flex-col items-center gap-6 p-16 px-6 max-w-6xl mx-auto text-center bg-white bg-opacity-90 rounded-lg mt-10 shadow-2xl border-t-4 border-teal-500'>
  <h1 className='text-4xl font-extrabold lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600'>
    Embark on an Unforgettable Journey
  </h1>
  <p className='text-gray-700 text-md sm:text-xl font-medium italic'>
    "Explore hidden gems, breathtaking landscapes, and captivating stories from around the globe."
  </p>
  <Link
    to='/search'
    className='text-md sm:text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out'
  >
    Start Your Adventure
  </Link>
</div>
      {/* Image Slider Section */}
      <div className="overflow-hidden mt-10">
      <div className="flex animate-slide gap-4 px-3">
        {/* Original Images */}
        {sliderImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slider-${index}`}
            className="rounded-lg shadow-lg w-80 h-40 object-cover flex-shrink-0"
          />
        ))}
        {/* Duplicate Images for Seamless Loop */}
        {sliderImages.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`slider-${index}`}
            className="rounded-lg shadow-lg w-80 h-40 object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>

      {/* Recent Posts Section */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-12'>
        {posts && posts.length > 0 ? (
          <div className='flex flex-col gap-6 bg-beige bg-opacity-90 rounded-lg p-6 shadow-lg'>
            <h2 className='text-2xl font-semibold text-center text-teal-500'>
              Recent Posts
            </h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        ) : (
          <div className="text-center text-gray-500 font-semibold italic">
            No posts available. Check back soon!
          </div>
        )}
      </div>
    </div>
  );
}
