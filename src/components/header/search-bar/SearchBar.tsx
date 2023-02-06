import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar: React.FunctionComponent = () => {
    return (
        <>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-8">
                <div className="flex items-center px-6 py-3 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-sm xl:px-0">
                    <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                id="search"
                                name="search"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
