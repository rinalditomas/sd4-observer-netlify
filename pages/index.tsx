import Head from "next/head";
import { useContext } from "react";
import Sidebar from "../components/sidebar";
import { StoreContext } from "../store/storeProvider";
import Main from "../components/main";

export default function Home() {
  const [store, dispatch]: any = useContext(StoreContext);
  const { hosts, navbarTab } = store;

  const displayRightComponent = (selectedNavbarTab: string) => {
    switch (selectedNavbarTab) {
      case "Home": {
        return <Main />;
      }
      case "Settings": {
        return (
          <div className="bg-gray-50 w-full flex items-center justify-center">
            <h1 className="font-bold text-gray-700">Future Graph page</h1>
          </div>
        );
      }

      default: {
        return <div>error</div>;
      }
    }
  };
  console.log(navbarTab);
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>{displayRightComponent(navbarTab)}</Sidebar>
    </div>
  );
}