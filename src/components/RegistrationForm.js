import Aside from "./Aside";
import RegistrationType from "./RegistrationType"


const RegistrationForm =() => {
    return (
      
                
       
          <div className="row">
              <aside className="aside col-12 col-md-4 col-lg-3">
                <Aside />
              </aside>
              <div className="col-12 col-md-4 col-lg-6">
            <section className="type">
              <RegistrationType/>
            </section>
            
            </div>
          </div>
      
      
    )
};

export default RegistrationForm