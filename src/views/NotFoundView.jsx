import {Link} from "react-router-dom";

import Button from "../Components/Button";

const NotFoundView = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <h2 className="text-primary text-8xl">404</h2>
      <h3 className="text-2xl">Página no encontrada</h3>
      <Button className="mt-6" variant="primary">
        <Link className="text-white no-underline" to="/home">
          Volver a Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundView;
