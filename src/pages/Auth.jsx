import { FloatingLabel } from "flowbite-react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext, useEffect } from "react";
import Mols from "../assets/images/mols-logo.png";
import Lmis from "../assets/images/lmis-logo.png";
import { AuthContext } from "../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^[97]\s*(([0-9]\s*){8})$/,
      "phone number doesn't meet the right standard"
    ),
  password: yup.string().required("Password is required"),
});

const Auth = () => {
  const { sign_in_loading, signInFunc } = useContext(AuthContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOsscLogin = (data) => {
    signInFunc("+251"+data.phoneNumber, data.password);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-2xl custom-shadow m-4 sm:m-0 rounded-2xl p-8 px-12 w-full max-w-md">
        <div className="mb-6 flex flex-col items-start justify-center">
          <h2 className="text-4xl font-bold text-[#115BA2]">E-LMIS OSSC</h2>
          <p className="text-xs text-gray-400">
            Sign in to access the dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit(handleOsscLogin)}>
          <div className="mb-4">
            <Controller
              isDisabled={true}
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FloatingLabel
                  {...field}
                  variant="outlined"
                  className="border-[#115BA2] focus:border-[#115BA2]"
                  label="Phone Number"
                  type="text"
                />
              )}
            />
            {errors && errors.phoneNumber && (
              <p className="text-red-500 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <Controller
              isDisabled={true}
              name="password"
              control={control}
              render={({ field }) => (
                <FloatingLabel
                  {...field}
                  variant="outlined"
                  className="border-[#115BA2] focus:border-[#115BA2]"
                  label="Password"
                  type="password"
                />
              )}
            />
            {errors && errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
            <div className="flex items-center justify-end mt-1">
              <p className="inline-block align-baseline cursor-not-allowed text-xs  hover:text-[#115BA2]">
                Forgot Password?
              </p>
            </div>
          </div>
          <button
            type="submit"
            className={`${
              sign_in_loading
                ? "bg-gray-300 hover:bg-gray-300"
                : "bg-[#115BA2] hover:bg-[#115BA2]"
            } w-full my-2 mt-4 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center`}
          >
            {sign_in_loading ? (
              <ThreeDots
                visible={true}
                height="30"
                width="30"
                color="#fafafa"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            Please Contact us if you have any issue with 0998890009
          </p>
        </div>
        <div className="mt-10 flex gap-2 items-center justify-between">
          <img src={Lmis} alt="Lmis" className="w-32" />
          <img src={Mols} alt="Mols" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
