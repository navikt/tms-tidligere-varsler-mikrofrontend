import ClearButtonIkon from "../../../../assets/ClearButtonIkon";

const ClearButton = ({ handleClearClick }) => {
  return (
    <button onClick={handleClearClick} className={"clear-button"} aria-label="Tøm">
      <ClearButtonIkon />
    </button>
  );
};

export default ClearButton;
