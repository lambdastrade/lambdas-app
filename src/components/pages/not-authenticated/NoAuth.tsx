import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const NoAuth: React.FunctionComponent<{}> = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
            <main className="sm:flex">
                <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">401</p>
                <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Unauthorized</h1>
                    <p className="mt-5 text-base w-96 text-gray-500">You might have to enable 3rd party cookies, or log in to peek behind the curtain.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                    <button
                    onClick={() => { loginWithRedirect(); }}
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Sign Up
                    </button>
                    <button
                    onClick={() => { loginWithRedirect(); }}
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Log In
                    </button>
                </div>
                </div>
            </main>
            </div>
        </div>
    );
}

export default NoAuth;