import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ user:{ username, tag, location, avatar, stats, statsItem, } }) => {
    return (
      <div className={css.profile}>

         <div className="description">
        <img className={css.userPic} src={avatar} alt={username} />
        <h1 className={css.userName}>{username}</h1>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
        </div>

        <div className={css.bottomContainer}>

          <ul className={css.stats}>
            <li className={statsItem}>
            <p className={css.label}>Followers</p>
            <h2 className={css.quantity}>{stats.followers}</h2>
          </li>

          <li className={statsItem}>
            <p className={css.label}>Views</p>
            <h2 className={css.quantity}>{stats.views}</h2>
          </li>

          <li className={statsItem}>
            <p className={css.label}>Likes</p>
            <h2 className={css.quantity}>{stats.likes}</h2>
          </li>
          </ul>

        </div>
      </div>
    );
  };
  export default Profile;
  
  Profile.propTypes = {
    user: PropTypes.shape({
      id:PropTypes.string,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };