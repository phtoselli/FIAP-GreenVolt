import { useEffect, useState } from "react";
import api from "../api";

function GetOffices() {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    api
      .get("/escritorios")
      .then((res) => {
        setOffices(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    offices,
  };
}

export { GetOffices };
