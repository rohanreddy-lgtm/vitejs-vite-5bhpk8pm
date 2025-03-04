import PropTypes from 'prop-types';
import './bookcard.css';

const BookCard = ({ title, author, description, imageUrl }) => {
    return (
        <div className="book-card">
            <img src={imageUrl} alt={`${title} cover`} className="book-card__image" />
            <div className="book-card__content">
                <h2 className="book-card__title">{title}</h2>
                <h3 className="book-card__author">{author}</h3>
                <p className="book-card__description">{description}</p>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
};

BookCard.defaultProps = {
    description: 'No description available',
    imageUrl: 'https://via.placeholder.com/150',
};

export default BookCard;