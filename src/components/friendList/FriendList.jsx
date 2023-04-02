import PropTypes from 'prop-types'
import css from 'components/friendList/FriendList.module.css'
import FriendListItem from 'components/frienListItem/FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
{friends.map(({ avatar, name, isOnline, id }) => (
    <FriendListItem avatar={avatar}
    name={name}
    isOnline={isOnline}
    key={id}
    >   
    </FriendListItem>
))}
        </ul>
    )
}
export default FriendList;

FriendList.propTypes = {
friends:PropTypes.arrayOf(
    PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })
).isRequired,
}