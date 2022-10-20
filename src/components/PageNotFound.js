import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <p className="not-found__text">
        Uh oh! There's nothing here... Sorry. 🥺
      </p>
      <Link className="button button_type_to-main" to="/">
        Back
      </Link>
    </div>
  );
}

export default PageNotFound;
