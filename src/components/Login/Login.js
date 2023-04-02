import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-xl font-medium uppercase"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-gray-600">
        Não Possui uma conta? {' '}
        <button className="text-blue-500 hover:text-blue-600">
          <Link to="/registrar"> Registre-se Aqui</Link>
        </button>
      </p>
    </div>
  );
};

export default LoginPage;