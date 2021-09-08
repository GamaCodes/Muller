export const Soluciones = (props) => {
  return (
    <div id="soluciones" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Soluciones que Ofrecemos:</h2>
          <p>
            En Muller con de experiencia e innovación estaremos ofertando
            soluciones tecnológicas y logísticas con profesionalismo, con un
            sistema confiable y seguro, por el cual se obtendrán datos precisos
            y soluciones puntuales los cuales ayudarán a la toma de decisiones
            acertadas, en cualquiera de los ambientes que nos encontremos.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
