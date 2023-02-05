import { classNames } from '../../common/classNames';
import {
  CursorArrowRippleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Composer', href: '/composer', icon: CursorArrowRippleIcon, current: false },
];

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4 text-lg font-jakarta font-semibold">
              Lambdas
            </div>
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700',
                      'group flex items-center px-2 py-2 text-sm font-medium font-jakarta rounded-md'
                    )}>
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="flex justify-center border-t border-gray-200 p-4">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-14 py-2 text-sm text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-jakarta font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
