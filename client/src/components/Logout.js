import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <React.Fragment>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
        Log Out
      </button>
    </React.Fragment>
  );
};

export default LogoutButton;