import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import axios from "axios";

export default function CredentialsModal() {
  const [store, dispatch]: any = useContext(StoreContext);
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const { openCredentialModal } = store;

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <Transition.Root show={openCredentialModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <h1 className=" self-center mx-auto font-semibold text-gray-700 mb-2">API credentials</h1>
                <div className="my-4">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block w-full rounded-md px-2 py-3 border-[1px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter username"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded-md px-2 py-3 border-[1px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter a password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    onClick={async () => {
                      let response = await axios.get(
                        `https://${credentials?.username}:${credentials?.password}@observer.shopdash.de/printer_status`
                      );
                      
                      if (response.status === 401) {
                        setError("The credentials entered are not correct.");
                        console.log("the credentials where not right");
                      } else {
                        console.log("everything its ok");

                        localStorage.setItem("myCat", JSON.stringify(credentials));
                        dispatch({
                          type: types.setCredentials,
                          payload: { credentials },
                        });
                        setError(null);
                      }
                    }}
                  >
                    Save
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
