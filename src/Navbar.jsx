export const Navbar = () => {
  return (
    <div
      id="nav"
      className="text-white flex items-center justify-between h-[8vh] px-5 uppercase"
    >
      <h1 className="logo text-4xl ">Dvsy</h1>
      <div className="elements flex gap-2 text-base ">
        <h4 className="bg-stone-800 px-5 py-3 rounded-md text-neutral-400">
          designer
        </h4>
        <h4 className="bg-stone-800 px-5 py-3 rounded-md text-neutral-400">
          collabs
        </h4>
        <h4 className="bg-stone-800 px-5 py-3 rounded-md text-neutral-400">
          events
        </h4>
        <h4 className="bg-stone-800 px-5 py-3 rounded-md text-neutral-400">
          blog
        </h4>
        <h4 className="bg-stone-800 px-5 py-3 rounded-md text-neutral-400">
          card
        </h4>
        <h4 className="btn bg-[#EE7155] text-black font-bold  px-5 py-3 rounded-md">
          get in touch
        </h4>
      </div>
    </div>
  );
};
