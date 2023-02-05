import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div className="flex h-full min-h-screen">
        <Sidebar />
        <Header />
      </div>
    </>
  );
};

export default Dashboard;
