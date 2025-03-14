import React, { useState, useEffect } from 'react'

function Hero() {
  const tmdbApiTokenKey =  import.meta.env.VITE_THE_MOVIE_DATABASE_READ_ACCESS_TOKEN;
  const posterBaseURL = import.meta.env.VITE_THE_MOVIE_DATABASE_POSTER_BASE_URL;
  // console.log(tmdbApiTokenKey);

  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async() => {
      const trendingURL = import.meta.env.VITE_TRENDING_URL;
      console.log(trendingURL);
      try{
        const trendingResponse = await fetch(trendingURL, {
          headers: {
            Authorization: `bearer ${tmdbApiTokenKey}`,
          },
        });
        console.log(trendingResponse);

        if (!trendingResponse.ok) {
          console.log("Failed to fetch data!");
        }
        
        const trendingResponseData = await trendingResponse.json()
        // console.log(trendingResponseData);
        setHeroData(trendingResponseData);
      } catch(error) {
        console.error("Failed to fetch hero page data", error);
      }
    }
    fetchHeroData();
  } ,[])

  return (
    <div>
      {heroData ? 
      (
        <div className="hero-image h-screen bg-[#0d0c11] overflow-x-hidden mt-30">
          <div id="backdrop" className="w-screen h-11/12 bg-center text-white bg-no-repeat bg-cover rounded-md" style={{backgroundImage: `url(${posterBaseURL+heroData.results[0].backdrop_path})`}}>
            <div className="mx-auto pt-40 md:pt-40 lg:pt-70 px-17 flex flex-col justify-center ">
              <div className=" lg:w-5/12 w-full px-7 py-5 rounded-xl bg-[#0d0c11] opacity-80 ">
                <p className="text-lg mb-4 lg:mb-8 font-semibold" id="movieGenres">
                  {heroData.results[0].media_type} 
                </p>

                <p className="text-lg mb-4 lg:mb-8 font-semibold" id="movieRating">
                  ⭐ {heroData.results[0].popularity}k
                </p>

                <h1 className="my-4 text-5xl lg:text-2xl font-bold leading-relaxed" id="movieTitle">
                  {heroData.results[0].original_title === undefined ?  heroData.results[0].original_name : heroData.results[0].original_title}
                </h1>
                <p className="text-md lg:text-md mb-4 lg:mb-8" id="movieDescription">
                  {heroData.results[0].overview}
                </p>
                <div className="">
                  <button id="backdrop-trailer" className="bg-[#f6101f] text-white hover:bg-white hover:text-[#f6101f] font-bold rounded-full py-2 px-4 my-2 cursor-pointer">
                    <i className="fa-solid fa-heart"></i> Watch
                  </button>
                  <button className="lg:ml-6  bg-black text-white hover:bg-white hover:text-black font-bold rounded-full  py-2 px-4 cursor-pointer">
                    <i className="fa-solid fa-plus"></i> Add to List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :
      (
        <div className="hero-image h-screen bg-[#0d0c11] overflow-x-hidden mt-20">
      <div id="backdrop" className="w-screen h-11/12 bg-center text-white bg-no-repeat bg-cover rounded-md bg-[url(../../src/assets/icons/tubeflix-dark-mode.png)]">
        <div className="mx-auto pt-50 md:pt-80 lg:pt-100 px-17 flex flex-col justify-center ">
          <div className=" lg:w-5/12 w-full px-7 py-5 rounded-xl bg-[#0d0c11] opacity-80 ">
            <p className="text-sm mb-4 lg:mb-8 font-semibold" id="movieGenres">
              - / -
            </p>

            <p className="text-sm mb-4 lg:mb-8 font-semibold" id="movieRating">
              ⭐ -
            </p>

            <h1 className="my-4 text-lg lg:text-2xl font-bold leading-relaxed" id="movieTitle">
              -
            </h1>
            <p className="text-xs lg:text-md mb-4 lg:mb-8" id="movieDescription">
              -
            </p>
            <div className="">
              <button id="backdrop-trailer" className="bg-[#f6101f] text-white hover:bg-white hover:text-[#f6101f] font-bold rounded-full py-2 px-4 my-2 cursor-pointer">
                <i className="fa-solid fa-heart"></i> Watch
              </button>
              <button className="lg:ml-6  bg-black text-white hover:bg-white hover:text-black font-bold rounded-full  py-2 px-4 cursor-pointer">
                <i className="fa-solid fa-plus"></i> Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
  )
}

export default Hero