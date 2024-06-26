import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex justify-start">
      <div className='sm:w-full lg:w-1/3 py-2'>
        <div className="relative flex items-center border-2 border-green-100 bg-transparent w-full h-10 rounded-lg focus-within:shadow-lg overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-text-base ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-text-base pr-2 bg-transparent"
              type="text"
              id="search"
              placeholder="Search" /> 
        </div>
      </div>
      <div className="px-2 w-full">
        <details className="dropdown">
          <summary className="btn m-1 bg-transparent border-none hover:bg-transparent shadow-none text-text-base">Community <FontAwesomeIcon icon={faChevronDown} className="w-4" /> </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        <button className="bg-success hover:bg-green-300 text-white py-2 px-4 rounded-lg text-sm">
          Create +
        </button>
      </div>
    </div>
  );
}
