import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar: React.FunctionComponent = () => {
    return (
        <>
            <div className="flex flex-1 self-stretch w-full">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative font-jakarta w-full">
                    <div className="pointer-events-none absolute pl-4 inset-y-0 left-0 flex items-center">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        className="rounded-lg border-2 transition-all border-gray-200 bg-white shadow-lg shadow-gray-50 py-2 pl-10 text-sm placeholder-gray-500 w-full"
                        placeholder="Search"
                        type="search"
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBar;
