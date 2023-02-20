import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FunctionComponent = () => {
    return (
        <>
            <div className="flex h-screen font">
                <Sidebar />
                <div className="flex-1 overflow-y-auto px-10 py-5 bg-gray-50">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default App;
