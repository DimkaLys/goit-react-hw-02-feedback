import PropTypes from 'prop-types';
import "./Section.css";

function Section({ title, children }) {
  return (
    <div className="Buttons" >
      <h1 className="tittle">{title}</h1>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Section;
