
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard } from './guards'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import RoleGuard from './guards/rol.guard'
import Admin from './pages/Private/Admin/Admin'
import Header from './components/Header'
import IngresoProductos from './pages/Private/Admin/IngresoProductos'
import UserPage from './pages/Private/User/User'
import ProfilePage from './pages/Private/Profile'
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility'
import GuestPage from './pages/Private/Guest/Guest'
import Register from './pages/Register/Register'


const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {

  return (
    <div>
      <div></div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>

          <Provider store={store}>

            <BrowserRouter>
              <Header />

              <RoutesWithNotFound>

                {/* Rutas públicas */}
                <Route path='/' element={<Navigate replace to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route path={PublicRoutes.REGISTER} element={<Register />} />

                {/* Rutas privadas protegidas por AuthGuard */}
                <Route element={<AuthGuard privateValidation={true} />}>

                  {/* Rutas accesibles para todos los usuarios autenticados */}
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                  <Route path={PrivateRoutes.PERFIL} element={<ProfilePage />} />

                  {/* Rutas protegidas por RoleGuard */}
                  <Route element={<RoleGuard role={Roles.ADMIN} />}>
                    <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
                    <Route path={PrivateRoutes.INGRESO_PRODUCTOS} element={<IngresoProductos />} />
                  </Route>

                  <Route element={<RoleGuard role={Roles.USER} />}>
                    <Route path={PrivateRoutes.USER} element={<UserPage />} />
                    <Route path={PrivateRoutes.INGRESO_PRODUCTOS} element={<IngresoProductos />} />
                  </Route>

                  <Route element={<RoleGuard role={Roles.GUEST} />}>
                    <Route path={PrivateRoutes.GUEST} element={<GuestPage />} />
                  </Route>

                  {/* Ruta para logout */}
                  <Route path={PrivateRoutes.LOGOUT} element={<Navigate replace to={PublicRoutes.LOGIN} />} />

                </Route>

              </RoutesWithNotFound>


            </BrowserRouter>

          </Provider>

        </Suspense>

      </div>
    </div>
  )
}

export default App