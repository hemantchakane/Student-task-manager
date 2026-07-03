function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="text-xl font-semibold">Student Task Manager</h1>
        <nav className="flex gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-950">Dashboard</a>
          <a href="#" className="hover:text-slate-950">Students</a>
          <a href="#" className="hover:text-slate-950">Tasks</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

