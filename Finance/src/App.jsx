import Tip from './components/Tips/tip';
import Card from './components/Card/card'
import Chart from './components/Chart/chart'
import Navbar from './components/Navbar/navbar'
import { useState } from "react";
import "./App.css";
import loft from "./assets/Chart_fill.png";
import chat from './assets/Chart.png'
import user from './assets/User.png'
import calendar from './assets/Calendar.png'
import search from './assets/Search.png'
import analytics from './assets/Chart.png'
import  folder from './assets/Folder.png'
import setting from './assets/Setting.png'
const App = () => {
  const [open, setOpen] = useState(true);
  // const Menus = [
  //   { title: "Dashboard", src: "Chart_fill" },
  //   { title: "Inbox", src: "Chat", id:"num1",  linkedinHandle:'/inbox',  },
  //   { title: "Account Transactions", src: "User", gap: true },
  //   { title: "Schedule ", src: "Calendar" },
  //   { title: "Search", src: "Search" },
  //   { title: "Analytics", src: "Chart" },
  //   { title: "Files ", src: "Folder", gap: true },
  //   { title: "Setting", src: "Setting" },
  // ];

  return (
    <>
    {/* <Navbar/> */}
      <div className="flex">
        <div
          id="hit"
          className={` ${
            open ? "w-72" : "w-20 "
          }   p-5 h-screen pt-2 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          {/* <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Thunkable
          </h1>
        </div>  */}
       <div>
       <h5 id="top"  className={`${
              !open && "scale-0"
            }`}>Balance</h5>
          <h2 id="top2" className={`${
              !open && "scale-0"
            }`}>$246,030</h2>
       </div>
          <ul className="pt-6">
            <li className=" bg-light-white flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={loft} />
              <a href='/'><span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span></a>
            </li>

            <li className=" mt-2 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={chat} />
              <a href="/inbox"><span className={`${!open && "hidden"} origin-left duration-200`}>
                Inbox
              </span></a>
            </li>
            <li className="mt-9 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={user} />
         <a href="/transact">     <span className={`${!open && "hidden"} origin-left duration-200`}>
                Account Transactions
              </span></a>
            </li>
            <li className="mt-2 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
            <img src={calendar} />
           <a href="/time">   <span className={`${!open && "hidden"} origin-left duration-200`}>
                Schedule
              </span></a>
            </li>
            <li className="mt-2  flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={search} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Search
              </span>
            </li>
            <li className="mt-2  flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={analytics} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Analytics
              </span>
            </li>
            <li className="mt-9  flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={folder} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Files
              </span>
            </li>
            <li className="mt-2 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 ">
              <img src={setting} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className=" flex-1 p-7">
         <Navbar/>
         <Card/>
         <Tip/>
         <Chart/>
        </div>
      </div>
    </>
  );
};
export default App;
