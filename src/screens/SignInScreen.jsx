import { useState } from "react";
import Header from "../components/Header";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تسجيل دخول:", { email, password });
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <Header />
      <main className="container flex justify-center items-center flex-1">
        <div className=" md:p-8 p-[10px] rounded-2xl shadow-md w-[448px] h-[286px] md:h-[433px] flex flex-col  md:bg-white justify-center   border border-gray-200">
          <div className="pb-6 md:pb-8">
            <h2 className="font-[700] text-[18px] md:text-[24px] leading-[32px] Roboto text-center text-[#111827]">
              Welcome back
            </h2>
            <p className="font-[400] text-[12px] md:text-[16px] leading-[19px] md:leading-[24px] Roboto  text-[#4B5563]  text-center">
              Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleSubmit} className="md:space-y-4 space-y-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className=" font-[500] text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] Roboto  text-[#374151]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full  py-[10px] px-[13px] md:py-3 md:px-4 outline-none p-4 rounded-[8px]  font-[500] text-[12px] md:text-[16px] leading-[19px] md:leading-[24px] Roboto  border border-gray-300 "
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-[500] text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] Roboto text-[#374151]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className=" w-full  py-[10px] px-[13px] md:py-3 md:px-4 outline-none p-4 rounded-[8px]  font-[500] text-[12px] md:text-[16px] leading-[19px] md:leading-[24px] Roboto  border border-gray-300 "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-[10px] md:py-3 rounded-[8px] font-[500] text-[12px] md:text-[16px]  leading-[19px] md:leading-[24px] Roboto "
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignInScreen;
