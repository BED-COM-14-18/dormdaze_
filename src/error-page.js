import { Link, useRouteError } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This navigates to the previous page
  };

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-10'>
      <div className='w-44 rounded-full bg-center bg-no-repeat bg-cover sm:w-[23vw] md:w-[36vw] lg:w-[40vw]'>
      </div>
      <h1 className='text-black text-2xl font-semibold'>🛑 Oops!</h1>
      <p className='text-black'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to={''} onClick={handleGoBack}>
        <span className='text-xl text-red-700 w-full flex flex-row p-2'>👈 go back </span>
      </Link>
    </div>
  );
}