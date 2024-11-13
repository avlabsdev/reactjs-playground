import PropTypes from "prop-types";

export default function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick} className="btn-default">
        Clicked {count} times
      </button>
    </>
  );
}

MyButton.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
