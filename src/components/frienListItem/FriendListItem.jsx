
import css from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (

<li>
  <span className={isOnline?css.isOnline:css.isOffline}></span>  
  <img src={avatar} alt="name" width='50' />
  <p>{name}</p>
</li>


    );};

export default FriendListItem;
   
