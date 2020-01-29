import React from 'react';
//States
import UserState from './context/users/UserState';
import ProductState from './context/products/ProductState';
import OrderState from './context/orders/OrderState';
import InvoiceState from './context/invoices/InvoiceState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components

import Layout from './components/Layout';
import Products from './components/ecommerce/products/Products';
import Checkout from './components/checkout/Checkout';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ModernInvoicePage from './components/invoices/Invoice';

import ListUserComponent from './components/users/ListUser';
import AddUserComponent from './components/users/AddUser';
import EditUserComponent from './components/users/EditUser';

import OrdersTable from './components/ecommerce/orders/OrdersTable';
import Order from './components/ecommerce/order/Order';
import Product from './components/ecommerce/product/Product';

// Pages
import AboutTab from './components/pages/profile/tabs/AboutTab';
import PhotosVideosTab from './components/pages/profile/tabs/PhotosVideosTab';
import TimelineTab from './components/pages/profile/tabs/TimelineTab';
import LoginPage from './components/pages/auth/LoginPage';
import ForgotPasswordPage from './components/pages/auth/ForgotPasswordPage';
import MailConfirmPage from './components/pages/auth/MailConfirmPage';
import ResetPasswordPage from './components/pages/auth/ResetPasswordPage';
import RegisterPage from './components/pages/auth/RegisterPage';

const App = () => {
  return (
    <UserState>
      <ProductState>
        <OrderState>
          <InvoiceState>
            <BrowserRouter>
              <Layout>
                <Switch>
                  <Route exact path='/products' component={Products} />
                  <Route exact path='/checkout' component={Checkout} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/auth/login' component={LoginPage} />
                  <Route exact path='/auth/register' component={RegisterPage} />
                  <Route
                    exact
                    path='/auth/forgotpassword'
                    component={ForgotPasswordPage}
                  />
                  <Route
                    exact
                    path='/auth/resetpassword'
                    component={ResetPasswordPage}
                  />
                  <Route
                    exact
                    path='/auth/confirmemail'
                    component={MailConfirmPage}
                  />
                  <Route path='/users' component={ListUserComponent} />
                  <Route path='/about' component={AboutTab} />

                  <Route path='/photos' component={PhotosVideosTab} />
                  <Route path='/timeline' component={TimelineTab} />
                  <Route path='/add-user' component={AddUserComponent} />
                  <Route path='/edit-user' component={EditUserComponent} />

                  <Route
                    exact
                    path='/apps/ecommerce/invoices'
                    component={ModernInvoicePage}
                  />
                  <Route
                    exact
                    path='/apps/ecommerce/products'
                    component={Products}
                  />
                  <Route
                    exact
                    path='/apps/ecommerce/products/selected'
                    component={Product}
                  />
                  <Route
                    exact
                    path='/apps/ecommerce/orders'
                    component={OrdersTable}
                  />
                  <Route
                    exact
                    path='/apps/ecommerce/orders/selected'
                    component={Order}
                  />
                </Switch>
              </Layout>
            </BrowserRouter>
          </InvoiceState>
        </OrderState>
      </ProductState>
    </UserState>
  );
};

export default App;
