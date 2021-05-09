import { useHistory } from "react-router";

const Button = () => {
  let history = useHistory();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    history.push({ pathname: "/participant-info" });
    console.log("başarılı");
  };
  return (
    <div className="next-wrap">
      <div>
        <button onClick={handleSubmitForm} type="submit" className="btn">
          Next Step <span class="material-icons">east</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
