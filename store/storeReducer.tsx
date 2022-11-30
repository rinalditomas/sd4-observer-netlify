const types = {
  setHosts: " set - hosts ",
  setPrinters: "set - printers",
  setNavbarTab: " set - navbarTab ",
  selectHost: "set - selectHosted",
  selectPrinter: "set - selectPrinter",
  errorDetailModal: "set - errorDetailModal",
  credentialModal: "set- credentialModal",
  setCredentials: "set - credentials",
};

let initialState = {
  hosts: [],
  printers: [],
  navbarTab: "Home",
  lastUpdate: new Date(),
  selectedHost: null,
  selectedPrinter: null,
  errorDetailModal: false,
  hostsErrors: 0,
  openCredentialModal: false,
  credentials: null,
};

const StoreReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.setHosts: {
      const { hosts } = action.payload;

      let errors = hosts.filter((host: any) => host.has_error === true);

      return {
        ...state,
        hosts: hosts,
        hostsErrors: errors.length,
      };
    }
    case types.setNavbarTab: {
      const { tab } = action.payload;

      console.log("entre");
      return {
        ...state,
        navbarTab: tab,
      };
    }
    case types.selectHost: {
      const { host } = action.payload;

      return {
        ...state,
        selectedHost: host,
      };
    }
    case types.selectPrinter: {
      const { printer } = action.payload;

      return {
        ...state,
        selectedPrinter: printer,
      };
    }
    case types.setPrinters: {
      const { printers } = action.payload;

      return {
        ...state,
        printers: printers,
      };
    }
    case types.errorDetailModal: {
      return {
        ...state,
        errorDetailModal: !state.errorDetailModal,
      };
    }
    case types.credentialModal: {
      let { openClose } = action.payload;
      console.log(openClose)
      return {
        ...state,
        openCredentialModal: openClose,
      };
    }

    case types.setCredentials: {
      const { credentials } = action.payload;
   

      return {
        ...state,
        credentials: credentials,
      };
    }

    default:
      return state;
  }
};

export { initialState, types };
export default StoreReducer;
