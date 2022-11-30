import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";

export default function Modal() {
  const [store, dispatch]: any = useContext(StoreContext);
  const { errorDetailModal, selectedPrinter } = store;

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
    <Transition.Root show={errorDetailModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch({
            type: types.errorDetailModal,
          });
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm lg:max-w-xl sm:p-6">
                <div>
                  {printer_status_codes[selectedPrinter?.status_code] === "bg-green-400" ? (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                  ) : printer_status_codes[selectedPrinter?.status_code] === "bg-yellow-400" ? (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                  )}
                  <div className="mt-3 text-center sm:mt-5">
                    <h1 className=" text-lg text-gray-700 font-bold">{selectedPrinter?.name}</h1>
                    <div className="my-6  flex justify-between">
                      <div className="flex flex-col items-start">
                        <label className="text-gray-500 " htmlFor="">
                          Status code
                        </label>
                        <h2 className="font-semibold text-gray-700 ">{selectedPrinter?.status_code}</h2>
                      </div>
                      <div className="flex flex-col items-end">
                        <label className="text-gray-500 " htmlFor="">
                          Status information
                        </label>
                        <h2 className="font-semibold text-gray-700 ">{selectedPrinter?.status_info}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() =>
                      dispatch({
                        type: types.errorDetailModal,
                      })
                    }
                  >
                    Go back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
