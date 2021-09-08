export const Contact = (props) => {
  return (
    <div>
      <div id="contacto">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contáctanos</h2>
                <p>Estamos para atender todas tus dudas.</p>
              </div>

              <p className="muller-contact">logistica@mullerpl.com</p>

              <a href="mailto:logistica@mullerpl.com">
                <button type="button" className="btn btn-custom btn-lg">
                  Escríbenos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2021 MULLER - Planning & Logistics</p>
        </div>
      </div>
    </div>
  );
};
