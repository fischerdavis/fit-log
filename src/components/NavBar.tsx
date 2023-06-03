import Link from "next/link";

const NavBar = () => (
  <nav className="border-gray-200 bg-white dark:bg-gray-900">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <Link href="/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Fitness Challenges
        </span>
      </Link>
      <div className="flex items-center">
        <Link
          href="/"
          className="mr-6 text-sm  text-gray-500 hover:underline dark:text-white"
        >
          Home
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
