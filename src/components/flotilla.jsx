export const Flotilla = (props) => {
  return (
    <div id="flotilla" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Flotilla</h2>
          <p>
            Nuestras flotillas cuentan con unidades nuevas y en excelentes
            condiciones. Todas tienen sistema de rastreo satelital para
            garantizar un viaje seguro.
          </p>
          <p>Dentro de nuestra flota se encuentran las siguientes unidades:</p>
          <p>
            Unidades para pasajeros Renta de camionetas Sprinter para 8, 14, 17
            y 20 pasajeros
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
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
