
import css from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (

<li className={css.item}>
  <span className={isOnline?css.isOnline:css.isOffline}></span>  
  <img className={css.avatar} src={avatar} alt="name" width='50' />
  <p className={css.name}>{name}</p>
</li>


    );};

export default FriendListItem;
   
