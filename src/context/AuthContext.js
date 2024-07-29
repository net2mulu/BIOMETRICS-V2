import { createContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../apollo/mutations";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  // apollo graphql queries
  const [signIn, { loading: sign_in_loading }] = useMutation(SIGN_IN);

  const signInFunc = (phoneNumber, password) => {

    const searchParams = new URLSearchParams(search).get("redirectTo");

    signIn({
      variables: { phoneNumber, password },
      onCompleted(data) {
        let signInResponse = data?.signInFe;

        setAuthData({
          id: signInResponse?.data.id,
          email: signInResponse?.data?.email,
          phoneNumber: signInResponse?.data?.phoneNumber,
          role: signInResponse?.data?.role,
          isLoggedInVar: true,
        });

        // // store the refresh token and access token on the storage
        localStorage.setItem(
          "refresh_token",
          signInResponse?.tokens?.refresh_token
        );
        localStorage.setItem(
          "access_token",
          signInResponse?.tokens?.access_token
        );
        localStorage.setItem("isLoggedIn", true);

        if (searchParams) {
          navigate(searchParams);
        } else {
          navigate("/home");
        }
      },
      onError(err) {
        if (err.message === "INVALID_CREDENTIALS") {
          toast.error("Incorrect email or password!");
        } else {
          toast.error("Something went wrong");
        }
      },
    });
  };

  //   useEffect(() => {
  //     //  on page load check the session storage
  //     if (localStorage.getItem("access_token")) {
  //       const token = localStorage.getItem("access_token");
  //       const { sub } = jwtDecode(token);

  //       // hit refresh token mutation
  //       getUserByPk({
  //         context: {
  //           headers: {
  //             "x-hasura-role": "foreign-entity-owner",
  //           },
  //         },
  //         variables: { id: sub },
  //         onCompleted(data) {
  //           // extract userData
  //           let userData = data?.user_by_pk;

  //           setUserData({
  //             ...userData,
  //           });

  //           fetchForeignData();
  //         },
  //         onError(error) {
  //           // navigate("/auth/signin");
  //         },
  //       });

  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //     }
  //   }, []);

  //   const logOut = (e) => {
  //     // clear session storage
  //     localStorage.clear();
  //     navigate("/");
  //   };

  return (
    <AuthContext.Provider
      value={{
        // logOut,
        sign_in_loading,
        signInFunc,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
