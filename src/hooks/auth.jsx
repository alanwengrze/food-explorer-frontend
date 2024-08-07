import { 
  createContext, 
  useContext, 
  useState,
  useEffect
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});
  async function signIn({email, password}){

    try{
      const response = await toast.promise(
        api.post("/sessions", {
          email, 
          password
        }),
        {
          pending: "Realizando login...",
          success: "Login realizado com sucesso",
        }
      )
      const { user, token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem("@foodexplorer:token", token);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({user, token});


    }catch(error){
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Não foi possível realizar o login.")
      }
    }
  }

  async function signOut(){
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user){
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { 
  AuthProvider,
  useAuth
};