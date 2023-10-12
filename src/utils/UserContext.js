

// we will use createContect to create our context. this comes from react library.

import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : " Default User ",
});

export default UserContext;
