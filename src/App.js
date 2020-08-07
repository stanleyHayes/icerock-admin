import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AccountPage from "./pages/account/AccountPage";
import ArchivePage from "./pages/archive/ArchivePage";
import ChangePasswordPage from "./pages/authentication/ChangePasswordPage";
import OrderDetailPage from "./pages/orders/OrderDetailPage";
import OrdersPage from "./pages/orders/OrdersPage";
import WhatsNewPage from "./pages/whatsnew/WhatsNewPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import UpdateProductPage from "./pages/products/UpdateProductPage";
import CreateProductPage from "./pages/products/CreateProductPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignInPage from "./pages/authentication/SignInPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/account" exact={true}>
              <AccountPage />
            </Route>

            <Route path="/archive" exact={true}>
              <ArchivePage />
            </Route>

            <Route path="/auth/change-password" exact={true}>
              <ChangePasswordPage />
            </Route>

            <Route path="/auth/forgot-password" exact={true}>
              <ForgotPasswordPage />
            </Route>

            <Route path="/auth/reset-password" exact={true}>
              <DashboardPage />
            </Route>

            <Route path="/auth/login" exact={true}>
              <SignInPage />
            </Route>

            <Route path="/auth/register" exact={true}>
              <SignUpPage />
            </Route>

            <Route path="/" exact={true}>
              <DashboardPage />
            </Route>

            <Route path="/orders/:orderId" exact={true}>
              <OrderDetailPage />
            </Route>

            <Route path="/orders" exact={true}>
              <OrdersPage />
            </Route>

            <Route path="/products" exact={true}>
              <ProductsPage />
            </Route>

            <Route path="/products/:productId" exact={true}>
              <ProductDetailPage />
            </Route>

            <Route path="/products/:productId/edit" exact={true}>
              <UpdateProductPage />
            </Route>

            <Route path="/product/new" exact={true}>
              <CreateProductPage />
            </Route>

            <Route path="/whats-new" exact={true}>
              <WhatsNewPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;
