import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FunctionComponent = () => {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <Header>
                    <Outlet />
                </Header>
            </div>
        </>
    );
};

export default App;
