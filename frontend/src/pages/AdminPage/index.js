import { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    window.location.replace("https://subvisuwheel.herokuapp.com/admin/login");
  }, []);

  return null;
};

export default AdminPage;
