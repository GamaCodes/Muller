export const Filosofia = (props) => {
  return (
    <div id="filosofia" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Filosofía</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  {d.text ? <p>{d.text}</p> : ""}
                  {d.list ? (
                    <ul>
                      <li>{d.list}</li>
                      <li>{d.list1}</li>
                      <li>{d.list2}</li>
                      <li>{d.list3}</li>
                      <li>{d.list4}</li>
                      <li>{d.list5}</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
