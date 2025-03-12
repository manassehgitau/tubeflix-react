import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function TrendingShowDetails() {
  const tmdbApiTokenKey =  import.meta.env.VITE_THE_MOVIE_DATABASE_READ_ACCESS_TOKEN;
  // const posterBaseURL = import.meta.env.VITE_THE_MOVIE_DATABASE_POSTER_BASE_URL;
  // console.log(tmdbApiTokenKey);

  const { showType,id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate hook

  const [trailerLink, setTrailerLink] = useState(null);

  async function getShowTrailerLink(movieID, showType) {
    const showTrailerURL = `${import.meta.env.VITE_FIND_BY_ID_ENDPOINT}/${showType}/${movieID}/videos`;
    const youTubeBaseURL = import.meta.env.VITE_YOUTUBE_EMBED;
    
    try {
      const movieKeyResponse = await fetch(showTrailerURL, {
        headers: {
          Authorization: `bearer ${tmdbApiTokenKey}`,
          accept: 'application/json',
        },
      });

      if (!movieKeyResponse.ok) {
        console.log("Failed to fetch movie Trailer");
        return null;
      }

      const movieKeyResponseData = await movieKeyResponse.json();
      const trailerData = movieKeyResponseData.results;
      
      if (!trailerData || trailerData.length === 0) {
        return null;
      }

      // Search for 1080p official YouTube trailer
      for (let entry of trailerData) {
        if (entry.size === 1080 && entry.official === true && entry.site === 'YouTube') {
          return youTubeBaseURL + entry.key;
        }
      }

      return null;
    } catch (error) {
      console.log("Failed to fetch movie Trailer", error);
      return null;
    }
  }

  // Fetch show details and trailer
  useEffect(() => {
    const fetchShowById = async () => {
      const showByIdURL = import.meta.env.VITE_FIND_BY_ID_ENDPOINT;

      try {
        const showByIdResponse = await fetch(`${showByIdURL}/${showType}/${id}`, {
          headers: {
            Authorization: `bearer ${tmdbApiTokenKey}`,
          },
        });

        if (!showByIdResponse.ok) {
          return;
        }

        const showByIdResponseData = await showByIdResponse.json();
        setShow(showByIdResponseData);

        // Fetch the trailer for the current movie or show
        const trailerLink = await getShowTrailerLink(showByIdResponseData.id, showType);
        setTrailerLink(trailerLink); // Set the trailer link
      } catch (error) {
        console.error('Failed to fetch show data', error);
      }
    };

    fetchShowById();
  }, [id, showType]);

  const handleClose = () => {
    navigate(-1);  // Go back to the previous page
    // Or use navigate('/') to redirect to the home page or any other page
  };

  if(!show){
    return(<p className='text-center flex justify-center items-center text-5xl font-bold'>Loading...</p>)
  }
  return (
    <div>
      <div className="movie-details fixed inset-0 bg-[#0e151d] bg-opacity-90 p-6 z-50 overflow-y-auto flex justify-center items-center">
        <div className="max-w-4xl w-full bg-[#1c2733] rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-white">{show.original_title === undefined ? show.original_name : show.original_title}</h3>
            {/* <!-- Close Button --> */}
            <button className="close-button text-3xl font-bold text-white hover:text-gray-400 transition duration-200 ease-in-out" 
            onClick={handleClose} >&times;</button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white my-3">Movie Synopsis</h3>
            <p className="text-white text-md mb-4 mt-2 px-2 leading-relaxed">
              {show.overview}
            </p>
          </div>
        
           {/* Display the trailer if available */}
           {trailerLink ? (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white my-3">Watch the Trailer</h3>
              <div className="w-full h-64 sm:h-96 overflow-hidden rounded-lg shadow-md">
                <iframe
                  id={`trailer-iframe-${show.id}`}
                  className="w-full h-full"
                  src={trailerLink}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <p className="text-white text-md">No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrendingShowDetails