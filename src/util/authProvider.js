import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export function UserProvider(props) {
  const [gToken, setgToken] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setvisible] = useState(false);
  // const [dLine, setDLine] = useState(false);

  useEffect(() => {
    return () => {
      axios
        .get("qnabotapi.azurewebsites.net/")
        .then(function (response) {
          // handle success
          setgToken(response.data.token);
          // setDLine(new DirectLine({ token: response.data.token }));
          setLoading(false);
          console.log(response.data.token);
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    };
  }, []);

  const values = {
    gToken,
    visible,
    setvisible,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
