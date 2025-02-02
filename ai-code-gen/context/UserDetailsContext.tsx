
import { createContext } from "react";



interface UserDetailsContextType {

  UserDetails: any;

  setUserDetails: (details: any) => void;

}



const UserDetailsContext = createContext<UserDetailsContextType | undefined>(undefined);



export { UserDetailsContext };
