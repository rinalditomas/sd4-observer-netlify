const types = {
  setHosts: " set - hosts ",
  setNavbarTab: " set - navbarTab ",
  selectHost: "set - selectHosted",
};

let initialState = {
  hosts: [
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: true,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: true,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-1",
      id: "9f391bbc-ebc1-4f30-b022-d307f6949cba",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "6910ca03-8893-4255-93ea-138ebe9b4980",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-2",
      id: "44571388-8eb4-4754-9951-d5666aa46786",
      host_name: "Desktop-2",
      ip: "192.158.1.38",
      has_error: false,
    },
    {
      location: "Location-3",
      id: "e25e3542-b120-49fc-a149-86fba8625479",
      host_name: "Desktop-1",
      ip: "192.158.1.38",
      has_error: false,
    },
  ],
  navbarTab: "Home",
  lastUpdate: new Date(),
  selectedHost: null,
};

const StoreReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.setHosts: {
      const { hosts } = action.payload;
      return {
        ...state,
        hosts: hosts,
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

      console.log("entre");
      return {
        ...state,
        selectedHost: host,
      };
    }

    default:
      return state;
  }
};

export { initialState, types };
export default StoreReducer;
