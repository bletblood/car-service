import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <Outlet />
    </div>
  )
}
