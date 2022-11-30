import { useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { ComputerDesktopIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Header from "./header";
import { classNames } from "../utils/functions";
import { types } from "../store/storeReducer";
import Modal from "./modal";
import PrintersContainer from "./printersContainer";
import HostsContainer from "./hostsContainer";

export interface MainProps {}

export default function Main(props: MainProps) {
  const [store, dispatch]: any = useContext(StoreContext);
  const { hosts, selectedHost, errorDetailModal } = store;

  return (
    <div className="bg-gray-50 w-full ">
      <Modal />
      <Header></Header>
      {selectedHost === null ? <HostsContainer /> : <PrintersContainer />}
    </div>
  );
}
