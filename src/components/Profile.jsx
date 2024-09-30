import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { email} = useContext(UserContext);

  return (
    <>
      <h4>Usuario: {email}</h4>
      <a
        className="nav-item nav-link"
        onClick={() => {
          logout();
        }}
        href="#"
      >
        🔒Logout
      </a>
    </>
  );
}

export default Profile;
