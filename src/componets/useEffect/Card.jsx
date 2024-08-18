import PropTypes from 'prop-types';

const Card = ({ users }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center mb-8">NEWS OF THE DAY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          users.length > 0 ? (
            users.map((currElem) => {
              const { url, urlToImage, title, publishedAt, author, description, source } = currElem;
              return (
                <div key={url} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-4">
                  <img src={urlToImage || "https://via.placeholder.com/150"} className="w-full h-48 object-cover mb-4" alt="News" />
                  <h5 className="text-xl font-semibold mb-2">{title}</h5>
                  <p className="text-gray-400 mb-4">{description}</p>
                  <p className="text-sm text-gray-500 mb-2">Author: {author || "Unknown"}</p>
                  <p className="text-sm text-gray-500 mb-2">Source: {source?.name || "Unknown"}</p>
                  <p className="text-sm text-gray-500 mb-4">Published at: {new Date(publishedAt).toLocaleString()}</p>
                  <a href={url} className="text-blue-400 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              );
            })
          ) : (
            <p className="text-center text-white">No news articles available.</p>
          )
        }
      </div>
    </>
  );
}

Card.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string
    })
  })).isRequired
};

export default Card;
