import React from 'react';

import Layout from './Layout';
import PaymentPage from './pages/payment-page/Payment-page';

const App: React.FC = () => {

  return (
    <Layout>
      <PaymentPage/>
    </Layout>
  );
}

export default App;