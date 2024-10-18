import Link from 'next/link';

const NavBarSlide = () => {
  return (
    <div className="slideInRight fixed top-20 z-50 block h-full w-full overflow-y-auto bg-base-100 lg:hidden">
      <ul className="text-base-400 mx-7 my-4 text-lg font-semibold">
        <Link href="" aria-label="Home" className="text-white">
          <p className="text-base-800 py-4 text-base font-bold">Home</p>
        </Link>
        <Link href="" aria-label="Speed" className="text-white">
          <p className="text-base-800 py-4 text-base font-bold">Speed</p>
        </Link>
        <Link href="" aria-label="Meets" className="text-white">
          <p className="text-base-800 py-4 text-base font-bold">Meets</p>
        </Link>
        <Link href="" aria-label="Security" className="text-white">
          <p className="text-base-800 py-4 text-base font-bold">Security</p>
        </Link>
        <Link href="" aria-label="Reviews" className="text-white">
          <p className="text-base-800 py-4 text-base font-bold">Reviews</p>
        </Link>
      </ul>
    </div>
  );
};

export default NavBarSlide;
