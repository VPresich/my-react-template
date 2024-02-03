const StatsItem = ({ label, value }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </li>
  );
};

export default StatsItem;
