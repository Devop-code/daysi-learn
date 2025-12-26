import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="label">
            Email
          </label>
          <input
            type="email"
            name=""
            className="input input-bordered w-full"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="label">
            password
          </label>
          <input
            type="password"
            name=""
            className="input input-bordered w-full"
            placeholder="example@gmail.com"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
