
import { Fragment, useContext, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import { classNames } from "../utils/functions";

const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
];
const filters = [
  {
    id: "location",
    name: "Location",
    options: [
      { value: "location-1", label: "Location-1" },
      { value: "location-2", label: "Location-2" },
      { value: "location-3", label: "Location-3" },
    ],
  },
];



export default function Header() {


  const [store, dispatch]: any = useContext(StoreContext);
  const { lastUpdate, selectedHost, hostsErrors } = store;
  const [open, setOpen] = useState(false);


  return (
    <div className="bg-gray-50 w-full">
      {/* Mobile filter dialog */}

      <div className="mx-auto px-4 text-center sm:px-6  lg:px-8 mt-4">
        <div className=" flex justify-between items-center  mb-4 px-4">
          <div className="flex items-center  group  ">
            {selectedHost ? (
              <>
                <button
                  onClick={() => {
                    dispatch({
                      type: types.selectHost,
                      payload: { host: null },
                    });
                  }}
                >
                  <ArrowLeftIcon className=" h-5 w-5 2xl:h-8 3xl:3-8    rounded text-black cursor-pointer" />
                </button>
                <p className=" mx-4 scale-0 group-hover:scale-100 text-xs font-semibold transition-all duration-100 origin-left">
                  Back to hosts
                </p>
              </>
            ) : null}
          </div>
          <h2 className=" font-bold text-gray-700">{selectedHost?.host_name}</h2>
          <div className="rounded flex w-fit h-fit py-2 px-2 divide-x divide-gray-200 shadow ">
            <div className="flex items-center justify-center py-1 px-2">
              <h1 className={classNames(hostsErrors > 0 ? "text-red-500 font-semibold" : "text-gray-400", " ")}>
                Errors
              </h1>
              <h1 className={classNames(hostsErrors > 0 ? "text-red-500  font-semibold" : "text-gray-400 ", "ml-2 ")}>
                {hostsErrors && hostsErrors}
              </h1>
            </div>
            <div className="flex flex-col items-start py-1 px-2">
              <h1 className="text-gray-400 text-sm ">Last update</h1>
              {/* <h1 className=" text-gray-400 text-sm">{lastUpdate?.toLocaleTimeString()}</h1> */}
            </div>
          </div>
        </div>

        <section aria-labelledby="filter-heading" className="border-t border-gray-200 py-6">
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option: any) => (
                      <Menu.Item key={option}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-900"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
              {filters.map((section, sectionIdx) => (
                <Popover
                  as="div"
                  key={section.name}
                  id={`desktop-menu-${sectionIdx}`}
                  className="relative inline-block text-left"
                >
                  <div>
                    <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>{section.name}</span>
                      {sectionIdx === 0 ? (
                        <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                          1
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form className="space-y-4" onChange={(e) => console.log(e.target)}>
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
            </Popover.Group>
          </div>
        </section>
      </div>
    </div>
  );
}
