import Head from "next/head";
import { useContext, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { StoreContext } from "../store/storeProvider";
import Main from "../components/main";
import { types } from "../store/storeReducer";
import axios from "axios";
import CredentialsModal from "../components/credentialsModal";

export default function Home() {
  const [store, dispatch]: any = useContext(StoreContext);
  const { hosts, navbarTab, openCredentialModal } = store;

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

  useEffect(() => {

    const credentials = localStorage.getItem("sd4-observer-credentials");
    console.log(credentials, ' credentials stored locally')
    if (credentials === null) {
      console.log('there are no credentials stored locally')
      dispatch({
        type: types.credentialModal,
        payload: {
          openClose: !openCredentialModal,
        },
      });
    } else {
      console.log("there are credentials stored locally");
      let parsedCredentials = JSON.parse(credentials);
      console.log(parsedCredentials, "parsed Credentials");
      dispatch({
        type: types.setCredentials,
        payload: { parsedCredentials },
      });
    }
  }, []);



  console.log(store);
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CredentialsModal />
      <Sidebar>{displayRightComponent(navbarTab)}</Sidebar>
    </div>
  );
}
