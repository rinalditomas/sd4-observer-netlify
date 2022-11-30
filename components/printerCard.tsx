import { useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";

export interface PrintersProps {
  printerInformation: any;
}

export default function PrinterCard({ printerInformation }: PrintersProps) {
  const [store, dispatch]: any = useContext(StoreContext);

  const { name, print_job, status_code } = printerInformation;

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
    <li
      className="w-10/12 mx-auto  flex justify-between bg-white px-2 py-2 shadow sm:rounded-md sm:px-6 cursor-pointer hover:bg-gray-100"
      onClick={() => {
        console.log("click");
        dispatch({
          type: types.errorDetailModal,
        });
        dispatch({
          type: types.selectPrinter,
          payload: {
            printer: printerInformation,
          },
        });
      }}
    >
      <div className="">
        <h1 className=" text-lg font-semibold text-gray-700">{name}</h1>
        <div className="flex items-center">
          <h2 className=" text-gray-400 text-sm">Status</h2>
          <div className={`${printer_status_codes[status_code]} h-4 w-4 rounded-full ml-3`}></div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-400 text-sm">Number of jobs in the queue</h1>
        <h1 className=" self-end text-lg font-semibold text-gray-700">{print_job.length}</h1>
      </div>
    </li>
  );
}
