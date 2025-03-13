import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Trending() {
    const tmdbApiTokenKey = import.meta.env.VITE_THE_MOVIE_DATABASE_READ_ACCESS_TOKEN;
    const posterBaseURL = import.meta.env.VITE_THE_MOVIE_DATABASE_POSTER_BASE_URL;

    const [trendingData, setTrendingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPages, setTotalPages] = useState(1); // Total pages state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchTrendingData = async () => {
            setLoading(true); // Set loading to true before fetching
            const trendingURL = `${import.meta.env.VITE_TRENDING_URL}&page=${currentPage}`;
            console.log('Fetching data for page:', currentPage);
            console.log('Trending URL:', trendingURL);

            try {
                const trendingResponse = await fetch(trendingURL, {
                    headers: {
                        Authorization: `bearer ${tmdbApiTokenKey}`,
                    },
                });

                if (!trendingResponse.ok) {
                    console.log('Failed to fetch data!');
                    return;
                }

                const trendingResponseData = await trendingResponse.json();
                console.log('Fetched trending data:', trendingResponseData.results);

                // Only update state if the data is different
                setTrendingData(trendingResponseData.results);
                setTotalPages(trendingResponseData.total_pages);
                setLoading(false); // Data fetched, so loading is false
            } catch (error) {
                console.error('Failed to fetch trending data', error);
                setLoading(false); // Even on error, stop loading
            }
        };

        fetchTrendingData();
    }, [currentPage]); // Re-run when currentPage changes

    return (
        <div>
            {loading ? (
                // Show loading screen while fetching data
                <div className='bg-[#0d0c11]'>
                    <div className=' w-full sm:w-1/2 lg:w-1/4 p-4 h-screen text-white flex flex-col justify-center items-center mx-auto'>
                        <div className="min-w-[200px] bg-[#0e151d] shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer movie-card">
                            <img src="./src/assets/icons/tubeflix-dark-mode.png" alt="Movie Poster" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold line-clamp-1">loading...</h2>
                                <p id="showType" className="text-sm">loading...</p>
                                <div className="text-yellow-400">⭐ loading...</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='bg-[#0d0c11] flex flex-col justify-center items-center'>
                    <div className="lg:w-11/12 mt-20">
                        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 p-4 gap-10 py-15 px-10 justify-items-center'>
                            {trendingData.map((showDatum) => (
                                <div key={showDatum.id} className="min-w-[200px] bg-[#0e151d] shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer movie-card text-white">
                                    <Link to={`/trending/${showDatum.media_type}/${showDatum.id}`}>
                                        <img src={posterBaseURL + showDatum.poster_path} alt={`Poster of ${showDatum.original_title || showDatum.original_name }`} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h2 className="text-xl font-semibold line-clamp-1">{showDatum.original_title || showDatum.original_name}</h2>
                                            <p id="showType" className="text-sm">{showDatum.media_type}</p>
                                            <div className="text-yellow-400">⭐ {Math.floor(showDatum.popularity)}k</div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg mr-2 disabled:opacity-50"
                            >
                                Previous
                            </button>

                            {/* Page Number Display */}
                            <span className="text-white font-semibold px-20">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg ml-2 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Trending;
