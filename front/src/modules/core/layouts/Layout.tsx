import { ToastContainer } from 'react-toastify';

interface LayoutPropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropsI): JSX.Element => {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      {children}
    </>
  );
};

export default Layout;
