export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="muller-logo-logi">
                  <svg
                    width="97"
                    height="98"
                    viewBox="0 0 97 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M96.3323 97.5068H18.1096V82.3975H96.3323V97.5068Z"
                      fill="#3BADE2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M84.3936 5.50682H96.3336V97.5068H84.3936V5.50682Z"
                      fill="#3BADE2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M79.532 29.3973H74.984V15.0547H59.8813V10.508H79.532V29.3973ZM71.0493 75.7293H65.7933V27.1453L45.744 56.2667L45.7213 56.236L59.8813 75.7293H52.7267L12.4067 19.128H18.7653L42.6853 52.0573H42.6867L42.6587 52.02L65.5333 19.128H71.0493V75.7293ZM44.9853 75.7027L17.7627 38.7053V75.7293H12.596V24.2413L50.2693 75.7027H44.9853ZM0 88.8893H88.888V2.11954e-07H0V88.8893Z"
                      fill="#D83539"
                    />
                  </svg>
                </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#carta" className="btn btn-custom btn-lg page-scroll">
                  Conócenos
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
