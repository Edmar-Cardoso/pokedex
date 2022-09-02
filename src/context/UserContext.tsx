import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  user: iUser;
}

interface iUser {
  id: number;
  gold: number;
  email: string;
  name: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<iUser>({} as iUser);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@USERID");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/Users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    loadUser();
  }, [user]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
