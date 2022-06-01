import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-blue-100">
      <div className="mx-auto flex w-[90%] justify-between py-5 md:w-[85%]">
        <h1 className="text-lg font-extrabold md:text-xl">
          Where in the world?
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
