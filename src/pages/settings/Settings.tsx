import Header from '../../components/header/Header';

const Settings: React.FunctionComponent = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <Header
                    pageName="Settings"
                    pageDescription="Manage your settings and preferences."
                />
            </div>
        </>
    );
};

export default Settings;
