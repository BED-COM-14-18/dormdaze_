import React from 'react';
import NotificationMobileHomePage from './notificationMobileComonent';
import NotificationDesktopHomePage from './notificationDesktopComponent';

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

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <NotificationMobileHomePage /> : <NotificationDesktopHomePage />;
};

export default function Notification() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

