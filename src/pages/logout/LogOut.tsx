import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

const LogOut = () => {

    const { logout } = useAuth0();

    useEffect(() => {
        logout();
    }, []);
    
  return (
      <>
      </>
  )
}

export default LogOut