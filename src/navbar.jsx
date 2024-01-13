import React from 'react'

const NavbarComponent = () => {
  return (
    <div>
      
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a  href='/'  class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-6/360103032_679447757532813_3320949709480004465_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=r5uznND0uv0AX9o5MFx&_nc_ht=scontent.flhe7-2.fna&oh=00_AfABv2dPzf0sClaYmPqKw6WJ81AapOLeyTfU4khccrUqtw&oe=65A55399" alt="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-1 bg-green-500 rounded-full" viewBox="0 0 24 24"/> 
      
      <span class="ml-3 text-xl">AJcricket</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href='/' class="mr-5 hover:text-gray-900">Home</a>
      <a href='/about' class="mr-5 hover:text-gray-900">About</a>
      <a href='/contact' class="mr-5 hover:text-gray-900">Address</a>
      <a href='/product' class="mr-5 hover:text-gray-900">Products</a>
      
    </nav>
    <a href='/article'><button  class="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Our Articles
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> </a>
  </div>
</header>
    </div>
  )
}

export default NavbarComponent
