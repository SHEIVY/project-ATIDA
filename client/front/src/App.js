import React from 'react';
import {
  useRoutes
} from 'react-router-dom';
import Addcusto from './components/addCustomer';
import Header from './components/header';
import CustomersPage from './pages/customers';
import CustomerPage from './pages/customer';
import UpdateDetails from './pages/updateDetails'
import DeleteCUST from './pages/deleteCUST'


function App() {
  const routes = useRoutes([
    { path: '/', element: <CustomersPage /> },
    { path: '/customer/:customerId', element: <CustomerPage /> },
    { path: '/updateDetails/:customerId', element: <UpdateDetails /> },
    { path: '/deleteCUST/:customerId', element: <DeleteCUST /> },
    { path: 'add', element: <Addcusto /> }
  ])

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;

