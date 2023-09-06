import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const colors = ['#E38D8D', '#E3B78D', '#A2E38D', '#8DD9E3', '#C68DE3'];

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list }>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={css.item} key={id} style={{ background: colors[index] }}>
            <span className={css.label}>{label}</span>
            <span  >{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics