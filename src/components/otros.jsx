export const Otros = (props) => {
  return (
    <div id="otros">
      <div className="container">
        <div className="section-title text-center">
          <h2>Otros</h2>
          <p>
            Muller también puede ofrecerle bajo el compromiso de encontrar las
            soluciones que ayuden a cada uno de nuestros clientes en el
            cumplimiento de sus objetivos y concentrar los resultados en el
            crecimiento sostenido y rentable de cada uno de sus negocios toda la
            ayuda posible en:
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-meta"> - {d.text} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
