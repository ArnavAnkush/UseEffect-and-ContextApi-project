function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-[#111827] border-b border-gray-800">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        My<span className="text-indigo-500">Store</span>
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-10">
        <a href="/" className="text-gray-300 hover:text-indigo-400 transition">
          Home
        </a>

        <a href="/cart" className="text-gray-300 hover:text-indigo-400 transition">
          Cart
        </a>
      </div>

      {/* Login */}
      <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-lg font-medium transition cursor-pointer">
        Login
      </button>

    </nav>
  );
}

export default Navbar;