import { useEffect, useState } from "react";
import api from "../api";

function GetAbout() {
  const [aboutData, setAbout] = useState();

  useEffect(() => {
    api
      .get("/sobre")
      .then((res) => {
        setAbout(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    aboutData,
  };
}

export { GetAbout };
