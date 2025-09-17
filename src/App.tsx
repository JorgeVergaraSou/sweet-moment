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

function AppContent() {
  return (
    <RoutesWithNotFound>
      {/* Rutas Home sin header/footer */}
      <Route
        path={PublicRoutes.HOME}
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />

      {/* Rutas públicas normales */}
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

      {/* Rutas privadas */}
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

        {/* Rutas solo admin */}
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

      {/* Redirección raíz */}
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



/*
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import { AuthGuard } from './guards';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import './theme/fonts.css';
import RoleGuard from './guards/rol.guard';
import Admin from './pages/Private/Admin/Admin';
import Header from './components/Header';
import { useLocation } from "react-router-dom";
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility';
import { store } from './redux/store';
import { useEsPaginaProtegida } from './hooks/useEsPaginaProtegida';

import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Servicios from './pages/Public/Servicios';
import ContactoPage from './pages/Public/Contacto';
import GaleriaPage from './pages/Public/Galeria';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));
const Home = lazy(() => import('./pages/Public/Home'));

function AppContent() {
  const esPaginaProtegida = useEsPaginaProtegida();

  const location = useLocation(); // Hook para obtener la ruta actual

  // Ocultar Header y Footer si estamos en Home
  const mostrarHeaderFooter = location.pathname !== PublicRoutes.HOME;
  return (
    <>
  {mostrarHeaderFooter && <Header />}


      <RoutesWithNotFound>
       
        <Route path="/" element={<Navigate replace to={PublicRoutes.HOME} />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.SERVICIOS} element={<Servicios/>} />
        <Route path={PublicRoutes.CONTACTO} element={<ContactoPage/>} />
        <Route path={PublicRoutes.GALERIA} element={<GaleriaPage/>} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />

      
        <Route element={<AuthGuard privateValidation={true} />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />


         
          <Route path={PrivateRoutes.USER} element={<div>Usuario</div>} />
          <Route path={PrivateRoutes.PERFIL} element={<div>Perfil</div>} />

         
          <Route element={<RoleGuard role={Roles.ADMIN} />}>
            <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
          </Route>

          
          <Route path={PrivateRoutes.LOGOUT} element={<Navigate replace to={PublicRoutes.LOGIN} />} />
        </Route>
      </RoutesWithNotFound>
      {mostrarHeaderFooter && <Footer />}
      
      {!esPaginaProtegida && (
        <>
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

function App() {
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

export default App;
*/