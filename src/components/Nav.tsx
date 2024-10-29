import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="bg-base-100 py-2">
      <div className="container mx-auto grid grid-cols-3 justify-between px-4 duration-300">
        <div className="flex justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-sm:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <span>
            <Link to="/" className="px-2 normal-case max-sm:text-md sm:text-xl duration-300">Car Service</Link>
          </span>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="#" className="btn btn-ghost normal-case text-md">Home</Link>
          <Link to="#" className="btn btn-ghost normal-case text-md">About</Link>
        </div>
        <div className="flex justify-end absolute max-md:right-2 md:right-12 top-8 duration-300 p-2 bg-base-100 rounded-full">
          <button className="btn rounded-full bg-red-500 hover:bg-red-600 text-base-100 normal-case text-md">
            Записаться
          </button>
        </div>
      </div>
    </nav>
  )
}

