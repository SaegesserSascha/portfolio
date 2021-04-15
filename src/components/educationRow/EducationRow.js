import "./educationRow.scss";
import PropTypes from "prop-types";

function EducationRow({ from, to, where, what, details }) {
  const detailList = details.map((el) => {
    return <li><p>{el}</p></li>
  });

  return (
    <div className="education-row-wrapper">
      <div className="time-frame-wrapper">
        <p className="p-fw-700">{from}</p>
        <p className="p-fw-700">{to}</p>
        <p>{where}</p>
      </div>
      <div className="visual-guide-wrapper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="description-wrapper">
        <p className="p-fw-700 accent">{what}</p>
        <ul>
          {detailList}
        </ul>
      </div>
    </div>
  );
}

EducationRow.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  what: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default EducationRow;