import PropTypes from "prop-types";

export const AnimeBlock = ({name, numberOfEps, genre}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Number of Eps: {numberOfEps} </p>
      <p>Genre: {genre}</p>
      <hr></hr>
    </div>
  );
}

AnimeBlock.propTypes = {
  name: PropTypes.string.isRequired,
  numberOfEps: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};