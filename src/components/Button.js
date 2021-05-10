const Button = ({ handleSubmitForm }) => {
  return (
    <div
      style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      className="next-wrap"
    >
      <div>
        <button onClick={handleSubmitForm} type="submit" className="btn">
          Next Step <span class="material-icons">east</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
