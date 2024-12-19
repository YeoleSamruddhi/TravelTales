// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>

//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About Us 
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//             Welcome to TravelTales, your ultimate guide to exploring the world! We are a community-driven website dedicated to sharing travel experiences, tips, and insights from passionate travelers across the globe. Whether you're looking for adventure, relaxation, or cultural exploration, TravelTales is here to inspire your next journey.
//             </p>

//             <p>
//             Our team of travel enthusiasts curates engaging content, bringing you detailed articles, recommendations, and practical advice on everything from hidden gems to well-known destinations. We believe that travel has the power to transform lives, and our goal is to provide you with the knowledge and inspiration to make your travel dreams a reality.
//             </p>

//             <p>
//             Join our community, share your experiences, and let’s travel the world together!
//             </p>
//           </div>

//         </div>

//         <div className='max-w-2xl mx-auto p-3 text-center'>
        
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             Privacy Policy
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//             At TravelTales, your privacy is important to us. We collect personal information (like your name and email) when you sign up or comment, and non-personal data (like IP addresses) for site analytics. We use this information to improve your experience and communicate updates.            </p>

//             <p>
//             We protect your data with security measures and never share your personal information with third parties without your consent, except as required by law. By using our site, you agree to our privacy practices.            </p>

            
//           </div>

//         </div>

//         <div className='max-w-2xl mx-auto p-3 text-center'>
        
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             Terms and Conditions
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//             By using TravelTales, you agree to the following:

//   1.Content Usage: All content on the site is owned by TravelTales or its contributors. Unauthorized use is prohibited.
//     2.User Comments: You may comment on posts, but all comments must be appropriate. We may remove any offensive content.
//   3.Third-Party Links: We are not responsible for external websites linked on our site.
//   4.Limitation of Liability: TravelTales is not liable for any damages from using the site.</p>
// <p>We may update these terms at any time. Continued use of the site means you accept any changes.            
//   </p>

            
//           </div>

//         </div>



// </div>
// </div>
//   );
// }

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-5xl mx-auto p-6'>

        {/* About Us Section */}
        <div>
          <h1 className='text-3xl font-semibold text-center my-7 text-gray-800'>
            About Us
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to <span className="font-bold text-gray-700">TravelTales</span>, your ultimate guide to exploring the world! We are a community-driven website dedicated to sharing travel experiences, tips, and insights from passionate travelers across the globe. Whether you're looking for adventure, relaxation, or cultural exploration, TravelTales is here to inspire your next journey.
            </p>

            <p>
              Our team of travel enthusiasts curates engaging content, bringing you detailed articles, recommendations, and practical advice on everything from hidden gems to well-known destinations. We believe that travel has the power to transform lives, and our goal is to provide you with the knowledge and inspiration to make your travel dreams a reality.
            </p>

            <p>
              Join our community, share your experiences, and let’s travel the world together!
            </p>
          </div>

          {/* Travel Blog Images */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
            <img
              src='/images/about/Aboutus_4.webp'
              alt='Travel Blog 1'
              className='rounded-lg shadow-md object-cover'
            />
            <img
              src='/images/about/Aboutus_2.jpg'
              alt='Adventure Travel'
              className='rounded-lg shadow-md object-cover'
            />
            <img
              src='/images/about/Aboutus_3.jpg'
              alt='Beach Vacation'
              className='rounded-lg shadow-md object-cover'
            />
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className='mt-10'>
          <h1 className='text-3xl font-semibold text-center my-7 text-gray-800'>
            Privacy Policy
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              At <span className="font-bold text-gray-700">TravelTales</span>, your privacy is important to us. We collect personal information (like your name and email) when you sign up or comment, and non-personal data (like IP addresses) for site analytics. We use this information to improve your experience and communicate updates.
            </p>
            <p>
              We protect your data with security measures and never share your personal information with third parties without your consent, except as required by law. By using our site, you agree to our privacy practices.
            </p>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className='mt-10'>
          <h1 className='text-3xl font-semibold text-center my-7 text-gray-800'>
            Terms and Conditions
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <ul className='list-disc list-inside text-left'>
              <li>
                <span className="font-bold">Content Usage:</span> All content on the site is owned by TravelTales or its contributors. Unauthorized use is prohibited.
              </li>
              <li>
                <span className="font-bold">User Comments:</span> You may comment on posts, but all comments must be appropriate. We may remove any offensive content.
              </li>
              <li>
                <span className="font-bold">Third-Party Links:</span> We are not responsible for external websites linked on our site.
              </li>
              <li>
                <span className="font-bold">Limitation of Liability:</span> TravelTales is not liable for any damages from using the site.
              </li>
            </ul>
            <p>
              We may update these terms at any time. Continued use of the site means you accept any changes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
