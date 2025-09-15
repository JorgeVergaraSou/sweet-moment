import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { lazy } from "react"
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound.utility"
import GuestPage from "./Guest/Guest"


const Admin = lazy(() => import('./Admin/Admin'))
const UserPage = lazy(() => import('./User/User'))

function Private() {
  //const userRole = useSelector((state: AppStore) => state.user.role);
  return (    
     <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.ADMIN} />} />
      <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
      <Route path={PrivateRoutes.USER} element={<UserPage />} />
      <Route path={PrivateRoutes.GUEST} element={<GuestPage />} />
    </RoutesWithNotFound>
  )
}
export default Private