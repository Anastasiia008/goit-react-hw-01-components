import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg'

export const Profile  = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
        <div>
            <div >
                <img
                    src={avatar ?? defaultImage}
                    alt="User avatar"
                    
                />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>
        
            <ul>
                <li>
                    <span>Followers&nbsp;</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views&nbsp;</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes&nbsp;</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}