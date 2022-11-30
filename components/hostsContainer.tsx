import { useContext, useEffect } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import { ComputerDesktopIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import HostCard from "./hostCard";

import { classNames } from "../utils/functions";
import axios from "axios";

export interface HostsContainerProps {}

export default function HostsContainer({}: HostsContainerProps) {
  const [store, dispatch]: any = useContext(StoreContext);
  const { hosts, credentials } = store;

  let getHostsFromServer = async () => {
    let response = await axios.get(
      `https://${credentials?.username}:${credentials?.password}@observer.shopdash.de/hosts`
    );

    console.log(response, "host response");
    console.log(credentials, "credentials in host container");
    dispatch({
      type: types.setHosts,
      payload: { hosts: response.data },
    });
  };

  useEffect(() => {
    if (credentials !== null) {
      getHostsFromServer();
    }
  }, []);

  if (credentials !== null) {
    setInterval(getHostsFromServer, 3000);
  }
  return (
    <div className="flex flex-col 2xl:flex-row  2xl:flex-wrap 2xl:justify-center 2xl:items-center 2xl:mx-auto items-center max-h-[75%]  2xl:max-h-[85%] overflow-y-auto 2xl:w-2/3">
      {hosts?.map((host: any, index: number) => (
        <HostCard hostInformation={host} index={index} />
      ))}
    </div>
  );
}
