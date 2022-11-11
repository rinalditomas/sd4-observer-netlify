import { useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { ComputerDesktopIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Header from "./header";
import { classNames } from "../utils/functions";
import { types } from "../store/storeReducer";

export interface MainProps {}

export default function Main(props: MainProps) {
  const [store, dispatch]: any = useContext(StoreContext);
  const { hosts, selectedHost } = store;

  console.log(selectedHost);

  return (
    <div className="bg-gray-50 w-full ">
      <Header></Header>
      {selectedHost === null ? (
        <div className="flex flex-col 2xl:flex-row  2xl:flex-wrap 2xl:justify-center 2xl:items-center 2xl:mx-auto items-center max-h-[75%]  2xl:max-h-[85%] overflow-y-auto 2xl:w-2/3">
          {hosts?.map((host: any, index: number) => (
            <div
              onClick={() => {
                dispatch({
                  type: types.selectHost,
                  payload: { host: host },
                });
              }}
              key={index}
              className={classNames(
                host.has_error ? "bg-red-100 group" : "bg-white hover:bg-gray-100",
                " w-4/5 2xl:w-1/6 mx-4 my-2 flex justify-between px-4 2xl:px-0 2xl:items-center 2xl:justify-center 2xl:flex-col py-4 2xl:py-8 rounded-xl shadow drop-shadow  cursor-pointer group "
              )}
            >
              <div
                className={classNames(
                  host.has_error ? "group-hover:scale-100 transition-all duration-50 origin-top  " : "",
                  "absolute inset-0 object-cover w-full h-full bg-red-100 scale-0 flex items-center justify-center "
                )}
              >
                <div className="2xl:w-3/4">
                  <h1 className="text-center font-semibold text-red-600">
                    There's an error in one of the printers connected to this host
                  </h1>
                  <h1 className="text-center font-semibold text-red-600">Click to get more information</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex items-center 2xl:flex-col">
                  {host.has_error ? (
                    <div className=" p-2 2xl:p-4 rounded-full bg-red-500 text-white font-bold">
                      <ExclamationTriangleIcon className=" w-4 h-4 2xl:w-6 2xl:h-6" />
                    </div>
                  ) : (
                    <div className="p-2 2xl:p-4  rounded-full bg-green-500 text-white font-bold">
                      <ComputerDesktopIcon className=" w-4 h-4 2xl:w-6 2xl:h-6" />
                    </div>
                  )}
                  <div className="ml-4 2xl:ml-0 2xl:mt-4">
                    <h1 className=" font-bold text-gray-700 text-lg ">{host.host_name}</h1>

                    <h1 className="2xl:hidden text-gray-400 font-semibold ">{host.location}</h1>
                  </div>
                </div>
              </div>
              <div className="flex 2xl:w-full 2xl:justify-around 2xl:mt-4 ">
                <h1 className="hidden 2xl:block text-gray-400 font-semibold ">{host.location}</h1>

                <div className=" flex flex-col items-center 2xl:flex-row">
                  <h1 className="text-gray-400 text-semibold">Printers</h1>
                  <h1 className="self-end font-bold text-gray-700 2xl:ml-2">3</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul
          role="list"
          className="space-y-3 py-4 sm:mt-12 lg:mt-6 xl:mt-2  xl:h-[80%] w-full  h-[70%] overflow-y-auto  flex flex-col  "
        >
          <li className="w-10/12 mx-auto  flex justify-between bg-white px-2 py-2 shadow sm:rounded-md sm:px-6">
            <div className="">
              <h1 className=" text-lg font-semibold text-gray-700">Printer-1</h1>
              <div className="flex items-center">
                <h2 className=" text-gray-400 text-sm">Status</h2>
                <div className="bg-red-500 h-4 w-4 rounded-full ml-3"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-400 text-sm">Number of jobs in the queue</h1>
              <h1 className=" self-end text-lg font-semibold text-gray-700">0</h1>
            </div>
          </li>
          <li className="w-10/12 mx-auto  flex justify-between bg-white px-2 py-2 shadow sm:rounded-md sm:px-6">
            <div className="">
              <h1 className=" text-lg font-semibold text-gray-700">Printer-1</h1>
              <div className="flex items-center">
                <h2 className=" text-gray-400 text-sm">Status</h2>
                <div className="bg-red-500 h-4 w-4 rounded-full ml-3"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-400 text-sm">Number of jobs in the queue</h1>
              <h1 className=" self-end text-lg font-semibold text-gray-700">0</h1>
            </div>
          </li>
          <li className="w-10/12 mx-auto  flex justify-between bg-white px-2 py-2 shadow sm:rounded-md sm:px-6">
            <div className="">
              <h1 className=" text-lg font-semibold text-gray-700">Printer-1</h1>
              <div className="flex items-center">
                <h2 className=" text-gray-400 text-sm">Status</h2>
                <div className="bg-red-500 h-4 w-4 rounded-full ml-3"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-400 text-sm">Number of jobs in the queue</h1>
              <h1 className=" self-end text-lg font-semibold text-gray-700">0</h1>
            </div>
          </li>
          <li className="w-10/12 mx-auto  flex justify-between bg-white px-2 py-2 shadow sm:rounded-md sm:px-6">
            <div className="">
              <h1 className=" text-lg font-semibold text-gray-700">Printer-1</h1>
              <div className="flex items-center">
                <h2 className=" text-gray-400 text-sm">Status</h2>
                <div className="bg-red-500 h-4 w-4 rounded-full ml-3"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-400 text-sm">Number of jobs in the queue</h1>
              <h1 className=" self-end text-lg font-semibold text-gray-700">0</h1>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
