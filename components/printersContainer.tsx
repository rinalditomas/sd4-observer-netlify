import axios from "axios";
import { useContext, useEffect } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import PrinterCard from "./printerCard";

export interface PrintersContainerProps {}

export default function PrintersContainer({}: PrintersContainerProps) {
  const [store, dispatch]: any = useContext(StoreContext);
  const { printers, selectedHost, credentials } = store;

  let getPrinterFromServer = async () => {
    console.log(selectedHost, "selectedHost");
    let response = await axios.get(
      `https://observer.shopdash.de/hosts/${selectedHost.id}/printers`
      // `https://${credentials?.username}:${credentials?.password}@observer.shopdash.de/hosts/${selectedHost?.id}/printers`
    );
    console.log(response, "printers response");
    dispatch({
      type: types.setPrinters,
      payload: { printers: printers },
    });
  };

  useEffect(() => {
    if (selectedHost !== null) {
      getPrinterFromServer();
    }
  }, []);

  return (
    <>
      <ul
        role="list"
        className="space-y-3 py-4 sm:mt-12 lg:mt-6 xl:mt-2  xl:h-[80%] w-full  h-[70%] overflow-y-auto  flex flex-col  "
      >
        {printers?.map((printer: any, index: number) => (
          <PrinterCard printerInformation={printer} />
        ))}
      </ul>
    </>
  );
}
