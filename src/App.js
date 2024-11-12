import React from 'react';
import './index.css';
import MobileHomePage from './routes/studentDashBoard/mobileComponent';
import DesktopHomePage from './routes/userDashBoard//desktopComponent';

//import paymentFeature from './routes/userDashboard/payment/paymentFeature';
//import LoginPage from './routes/userDashboard/hostelOwnerDashoard/hostelOwnerAuth/LoginPage';

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handlewindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handlewindowResize);
    return () => window.removeEventListener("resize", handlewindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

/*const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;*/

// eslint-disable-next-line no-unused-vars


const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileHomePage /> : <DesktopHomePage />;
};


export default function UserProfile() {
  return (
<ViewportProvider>
  <MyComponent />
</ViewportProvider>
  );
}
