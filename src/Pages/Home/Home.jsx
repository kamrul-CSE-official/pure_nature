import { useContext } from "react";
import { Helmet } from "react-helmet";

import { AuthContext } from "../../Providers/AuthProvider";

export default function Home() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pure Nature | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Home : {user?.email}
      <button onClick={handleLogOut} className="btn btn-error">
        LogOut
      </button>
    </div>
  );
}
