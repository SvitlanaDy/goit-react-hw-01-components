import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr className={css.tableHeader}>
            <th className={css.tableHeaderText}>Type</th>
            <th className={css.tableHeaderText}>Amount</th>
            <th className={css.tableHeaderText}>Currency</th>
          </tr>
        </thead>
  
        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tableRow}>
              <td className={css.type}>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td className={css.currency}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default TransactionHistory;
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  