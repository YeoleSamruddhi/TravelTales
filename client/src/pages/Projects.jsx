// import CallToAction from '../components/CallToAction';

// export default function Projects() {
//   return (
//     <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
//       <h1 className='text-3xl font-semibold'></h1>
//       {/* <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
//       <CallToAction /> */}
//     </div>
//   )
// }

export default function Projects() {
  return (
    <div className='min-h-screen max-w-7xl mx-auto flex flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold text-center mb-6'>
        Discover the Best Travel Experiences
      </h1>

      {/* Image Grid Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='relative overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_2.webp' 
            alt='Destination 10'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>EXPEDITION</span>
            <p>Rugged terrain exploration motorcycle.</p>
          </div>
        </div>

        {/* Image 1 */}
        <div className='relative md:col-span-2 overflow-hidden'>
          <img 
            src='/images/projects/photogallery400x300_1.jpeg' 
            alt='Destination 1'
            onError={(e) => e.target.src = 'https://via.placeholder.com/400x300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>ADVENTURE</span>
            <p>Embracing adventure on the water.</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className='relative overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_6.jpg' 
            alt='Destination 2'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>HIKING</span>
            <p>Exploring nature with breathtaking views.</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className='relative lg:col-span-2 overflow-hidden'>
          <img 
            src='/images/projects/photogallery600_4.jpg' 
            alt='Destination 3'
            onError={(e) => e.target.src = 'https://via.placeholder.com/600'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>PARADISE</span>
            <p>Breathtaking coastal island escape.</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className='relative overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_7.png' 
            alt='Destination 4'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>SERENITY</span>
            <p>A calm, scenic landscape perfect for relaxation</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className='relative md:col-span-1 overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_8.png' 
            alt='Destination 5'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>JOURNEY</span>
            <p>Exploring lakes and mountains with a bike.</p>
          </div>
        </div>

        {/* Image 6 */}
        <div className='relative lg:col-span-1 overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_9.png' 
            alt='Destination 6'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>EXPLORATION</span>
            <p>Discovering picturesque lakes and valleys</p>
          </div>
        </div>

        {/* Image 7 */}
        <div className='relative md:col-span-2 overflow-hidden'>
          <img 
            src='/images/projects/photogallery400x300_3.jpg' 
            alt='Destination 7'
            onError={(e) => e.target.src = 'https://via.placeholder.com/400x300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>CASCADE</span>
            <p>Stunning waterfall ideal for adventure.</p>
          </div>
        </div>

        {/* Image 8 */}
        <div className='relative overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_10.png' 
            alt='Destination 8'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>ESCAPADE</span>
            <p>Boat ride on tranquil waters amidst stunning mountain landscapes.</p>
          </div>
        </div>

        {/* Image 9 */}
        <div className='relative lg:col-span-2 overflow-hidden'>
          <img 
            src='/images/projects/photogallery600_5.jpg' 
            alt='Destination 9'
            onError={(e) => e.target.src = 'https://via.placeholder.com/600'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>DHAMMA</span>
            <p>Scenic cliffside monastery for peace.</p>
          </div>
        </div>

        {/* Image 10 */}
        <div className='relative overflow-hidden'>
          <img 
            src='/images/projects/photogallery300_11.png' 
            alt='Destination 10'
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
            className='w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          />
          <div className='absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white text-sm'>
            <span className='font-bold'>WANDERLUST</span>
            <p>Capturing sunset mountain vistas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
