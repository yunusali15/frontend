import React from "react";
import './AdminMain.css';
import { useHistory } from "react-router-dom";

const AdminMain = () => {
    const history = useHistory();
    function handleClick() {
        history.push("/adminview");
    }

  return (
    <div className="admin__main">
      <h1>This is the admin main page</h1>
      <button type="button" onClick={handleClick}>
      Go admin view
    </button>
    </div>
  );
};

export default AdminMain;