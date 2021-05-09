import Aside from "./Aside";
import RegistrationType from "./RegistrationType";
import Cardimg from "./Cardimg";

const RegistrationForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="aside col-12 col-md-4 col-lg-3">
          <Aside />
        </aside>
        <div className="col-12 col-md-4 col-lg-6">
          <section className="type">
            <RegistrationType />
          </section>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Cardimg />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
