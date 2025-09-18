//src/App.tsx
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utility";

import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";

import Servicios from "./pages/Public/Servicios";
import ContactoPage from "./pages/Public/Contacto";
import GaleriaPage from "./pages/Public/Galeria";
import { PublicRoutes, PrivateRoutes, Roles } from "./models";
import { AuthGuard } from "./guards";
import RoleGuard from "./guards/rol.guard";
import Admin from "./pages/Private/Admin/Admin";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));
const Home = lazy(() => import("./pages/Public/Home"));

export default function App() {
  const basename = process.env.NODE_ENV === "production" ? "/sweet-moment-candy" : "/";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <BrowserRouter basename={basename}>
          <RoutesWithNotFound>
            {/* Redirección raíz */}
            <Route path="/" element={<Navigate replace to={PublicRoutes.HOME} />} />

            {/* Rutas públicas */}
            <Route path={PublicRoutes.HOME} element={<HomeLayout><Home /></HomeLayout>} />
            <Route path={PublicRoutes.SERVICIOS} element={<MainLayout><Servicios /></MainLayout>} />
            <Route path={PublicRoutes.CONTACTO} element={<MainLayout><ContactoPage /></MainLayout>} />
            <Route path={PublicRoutes.GALERIA} element={<MainLayout><GaleriaPage /></MainLayout>} />
            <Route path={PublicRoutes.LOGIN} element={<MainLayout><Login /></MainLayout>} />

            {/* Rutas privadas */}
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<MainLayout><Private /></MainLayout>} />
              <Route path={PrivateRoutes.USER} element={<MainLayout><div>Usuario</div></MainLayout>} />
              <Route path={PrivateRoutes.PERFIL} element={<MainLayout><div>Perfil</div></MainLayout>} />
              <Route element={<RoleGuard role={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.ADMIN} element={<MainLayout><Admin /></MainLayout>} />
              </Route>
              <Route path={PrivateRoutes.LOGOUT} element={<Navigate replace to={PublicRoutes.LOGIN} />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}


/*
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utility";

import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";

import Servicios from "./pages/Public/Servicios";
import ContactoPage from "./pages/Public/Contacto";
import GaleriaPage from "./pages/Public/Galeria";
import { PublicRoutes, PrivateRoutes, Roles } from "./models";
import { AuthGuard } from "./guards";
import RoleGuard from "./guards/rol.guard";
import Admin from "./pages/Private/Admin/Admin";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));
const Home = lazy(() => import("./pages/Public/Home"));

function AppContent() {
  return (
    <RoutesWithNotFound>
 
      <Route
        path={PublicRoutes.HOME}
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />

   
      <Route
        path={PublicRoutes.SERVICIOS}
        element={
          <MainLayout>
            <Servicios />
          </MainLayout>
        }
      />
      <Route
        path={PublicRoutes.CONTACTO}
        element={
          <MainLayout>
            <ContactoPage />
          </MainLayout>
        }
      />
      <Route
        path={PublicRoutes.GALERIA}
        element={
          <MainLayout>
            <GaleriaPage />
          </MainLayout>
        }
      />
      <Route
        path={PublicRoutes.LOGIN}
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

   
      <Route element={<AuthGuard privateValidation={true} />}>
        <Route
          path={`${PrivateRoutes.PRIVATE}/*`}
          element={
            <MainLayout>
              <Private />
            </MainLayout>
          }
        />

        <Route
          path={PrivateRoutes.USER}
          element={
            <MainLayout>
              <div>Usuario</div>
            </MainLayout>
          }
        />
        <Route
          path={PrivateRoutes.PERFIL}
          element={
            <MainLayout>
              <div>Perfil</div>
            </MainLayout>
          }
        />

      
        <Route element={<RoleGuard role={Roles.ADMIN} />}>
          <Route
            path={PrivateRoutes.ADMIN}
            element={
              <MainLayout>
                <Admin />
              </MainLayout>
            }
          />
        </Route>

        <Route
          path={PrivateRoutes.LOGOUT}
          element={<Navigate replace to={PublicRoutes.LOGIN} />}
        />
      </Route>

      
      <Route path="/" element={<Navigate replace to={PublicRoutes.HOME} />} />
    </RoutesWithNotFound>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}
  */