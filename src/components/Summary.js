import { useLocation } from "react-router-dom";

const Summary = (props) => {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state.name}</h1>
      <h2>{location.state.lastname}</h2>
    </div>
  );
};

export default Summary;
