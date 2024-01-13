import React from 'react'

const Home = () => {
  return (
    <>
  
     
<section class="text-gray-600 body-font ">
  <div class="container mx-auto flex  px-5 py-24 md:flex-row flex-col  justify-around ...  ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex  flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Cricket is EveryThing
        <br class="hidden lg:inline-block"/>Here in Pakistan
      </h1>
      <p class="mb-8 leading-relaxed"> A tape ball is a tennis ball wrapped in electrical tape and is used in playing backyard cricket. This modification of the tennis ball gives it greater weight, speed and distance while still being easier to play with than the conventional cricket ball. The variation was pioneered in Karachi, Pakistan and is credited with Pakistan's famous production of fast bowlers </p>
      <div class="flex justify-center">
        <a href='https://www.facebook.com/Ajcricketpk'><button class="inline-flex text-white  bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Facebook</button></a>
       <a href='https://www.instagram.com/ajcrickett'> <button class="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">Instagram</button></a>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img class="object-cover object-center rounded ms-11 " alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Pakistan_cricket_team_logo.png"/>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Our Social Media Where We Share Different Excited  Things </h2>
    <div class="md:w-3/5 md:pl-6">
      <p class="leading-relaxed text-base">We encourage you to express yourself, celebrate diversity, and respect differing opinions. Let's foster a community where kindness, empathy, and understanding prevail.Together, we can make this platform a vibrant and enriching space for all. Thank you for being part of our social media family—we look forward to sharing many more wonderful moments together!</p>
      <div class="flex md:mt-4 mt-6">
      <a  href='/contact'>  <button class="inline-flex text-white  bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-orange-600 rounded">Address</button></a>
        <a  href='/article' class="text-green-500 inline-flex items-center ml-4">For Articles
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Home
