import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default user is displayed because no value={} is given, if it was given than the value wouldve changed",
});

export default UserContext