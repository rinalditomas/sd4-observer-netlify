import { ComputerDesktopIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import { classNames } from "../utils/functions";

export interface HostProps {
  hostInformation: any;
  index: number;
}

export default function HostCard({ hostInformation, index }: HostProps) {
  const [store, dispatch]: any = useContext(StoreContext);

  const { has_error, host_name, location } = hostInformation;

  let printer_status_codes: any = {
    "0x00000200": "bg-green-400",
    "0x00400000": "bg-yellow-400",
    "0x00000002": "bg-red-400",
    "0x00008000": "bg-yellow-400",
    "0x00000100": "bg-yellow-400",
    "0x00000020": "bg-yellow-400",
    "0x00001000": "bg-red-400",
    "0x00040000": "bg-red-400",
    "0x00000080": "bg-red-400",
    "0x00000800": "bg-reed-400",
    "0x00200000": "bg-red-400",
    "0x00080000": "bg-red-400",
    "0x00000008": "bg-red-400",
    "0x00000010": "bg-red-400",
    "0x00000040": "bg-red-400",
    "0x00000001": "bg-green-400",
    "0x00000004": "bg-yellow-400",
    "0x01000000": "bg-green-400",
    "0x00000400": "bg-green-400",
    "0x00004000": "bg-green-400",
    "0x02000000": "bg-red-400",
    "0x00800000": "bg-yellow-400",
    "0x00020000": "bg-green-400",
    "0x00100000": "bg-red-400",
    "0x00002000": "bg-yellow-400",
    "0x00010000": "bg-yellow-400",
    "0x0": "bg-green-400",
    "0x80": "bg-red-400",
  };

  return (
    <div
      onClick={() => {
        dispatch({
          type: types.selectHost,
          payload: { host: hostInformation },
        });
      }}
      key={index}
      className={classNames(
        has_error ? "bg-red-100 group" : "bg-white hover:bg-gray-100",
        " w-4/5 2xl:w-1/6 mx-4 my-2 flex justify-between px-4 2xl:px-0 2xl:items-center 2xl:justify-center 2xl:flex-col py-4 2xl:py-8 rounded-xl shadow drop-shadow  cursor-pointer group "
      )}
    >
      <div
        className={classNames(
          has_error ? "group-hover:scale-100 transition-all duration-50 origin-top  " : "",
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
          {has_error ? (
            <div className=" p-2 2xl:p-4 rounded-full bg-red-500 text-white font-bold">
              <ExclamationTriangleIcon className=" w-4 h-4 2xl:w-6 2xl:h-6" />
            </div>
          ) : (
            <div className="p-2 2xl:p-4  rounded-full bg-green-500 text-white font-bold">
              <ComputerDesktopIcon className=" w-4 h-4 2xl:w-6 2xl:h-6" />
            </div>
          )}
          <div className="ml-4 2xl:ml-0 2xl:mt-4">
            <h1 className=" font-bold text-gray-700 text-lg ">{host_name}</h1>

            <h1 className="2xl:hidden text-gray-400 font-semibold ">{location}</h1>
          </div>
        </div>
      </div>
      <div className="flex 2xl:w-full 2xl:justify-around 2xl:mt-4 ">
        <h1 className="hidden 2xl:block text-gray-400 font-semibold ">{location}</h1>

        <div className=" flex flex-col items-center 2xl:flex-row">
          <h1 className="text-gray-400 text-semibold">Printers</h1>
          <h1 className="self-end font-bold text-gray-700 2xl:ml-2">3</h1>
        </div>
      </div>
    </div>
  );
}
