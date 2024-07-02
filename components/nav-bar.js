import { navBarItems } from "../config/constants";
import { BlockChainIcon } from "./icons";

const NavigationBar = () => {
  return (
    <div className="navbar mx-auto w-full max-w-6xl py-2">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <BlockChainIcon />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navBarItems.map((nItem) => (
            <li key={nItem}>
              <a className="text-white">{nItem}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <p className="btn btn-sm rounded-none btn-outline border-primary rounded-tl-xl h-9 rounded-br-xl text-white">
          LOG IN
        </p>
        <p className="mx-2"></p>
        <p className="btn btn-sm btn-primary text-white rounded-none rounded-tl-xl h-9 rounded-br-xl">
          SIGN UP
        </p>
      </div>
    </div>
  );
};

export default NavigationBar;
