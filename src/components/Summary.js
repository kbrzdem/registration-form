import { useLocation } from "react-router-dom";
import Aside from "./Aside";

import Cardimg from "./Cardimg";

const Summary = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <aside className="aside col-12 col-md-4 col-lg-3">
            <Aside />
          </aside>
          <div className="col-12 col-md-4 col-lg-6">
            <section>
              <div className="row">
                <h3 className="col-12 summary-title">Summary</h3>
                <h4 className="col-12 summary-total">TOTAL AMOUNT:</h4>
              </div>
              <div className="row">
                <div className="col-12 typecard typecard--summary-pd">
                  <div className="summary-card">
                    <p className="summary-text">
                      {location.state.name} {location.state.lastname}
                    </p>
                    <h3 className="summary-subtitle">Registration Type </h3>
                    <p className="summary-typetext">Regular</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardimg />
          </div>
        </div>
      </div>

      <div
        style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        className="next-wrap"
      >
        <div>
          <button type="submit" className="btn">
            Finish <span class="material-icons">east</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
