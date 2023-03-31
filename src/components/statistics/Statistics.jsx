import PropTypes from 'prop-types';
import css from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
    return (
<div className={css.statistics}>
<div className= {css.statContainer}>
{title && <h2 className={css.title}>{title}</h2>}
<ul className={css.statList}>
{stats.map(({ label, percentage, id }) => (
         <li
         key={id}
         className={css.bottomListItem}
         style={{ backgroundColor: getRandomColor() }}
       >
         <span className={css.label}>{label}</span>
         <span className={css.percentage}>{percentage}%</span>
       </li>
     ))}
</ul>
</div>

</div>
    );};


    function getRandomColor(){
     const color = Math.floor(Math.random() * 16777215).toString(16);
     return '#' + color;
    }
   
    export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};