import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumb = (props: { pageHierarchy: any }) => {
    return (
        <nav className="flex font-jakarta font-semibold" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon
                                className="h-5 w-5 flex-shrink-0 stroke-2"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {props.pageHierarchy.map((page: any) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            <a
                                href={page.href}
                                className="ml-4 text-sm text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}>
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
