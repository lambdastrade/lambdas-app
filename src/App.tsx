import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FunctionComponent = () => {
    return (
        <>
            <div className="flex h-screen font">
                <div className="w-1/6">
                    <Sidebar />
                </div>
                <div className="w-5/6">
                    <Header>
                        <Outlet />
                    </Header>
                </div>
            </div>
        </>
    );
};

export default App;
