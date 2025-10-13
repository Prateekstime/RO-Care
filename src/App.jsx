import React, { Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./pages/Loading";
import Layout from "./pages/Layout";
import ProductDetailPage from "./components/products/ProductDetailPage";
import AllBrands from "./pages/AllBrands";
import Login from "./pages/Login";
import Register from "./pages/RegisterPage";

const Home = React.lazy(() => import("./components/home/Home"));
const ServiceusPage = React.lazy(() =>
  import("./components/services/ServicesPage")
);
const Products = React.lazy(() => import("./components/products/ProductsPage"));
const ServiceRequest = React.lazy(() => import("./pages/RequestForm"));
const Cart = React.lazy(() => import("./pages/Cart"));
const BuyNow = React.lazy(() => import("./pages/BuyNow"));
const OrderCancelled = React.lazy(() =>
  import("./components/order/OrderCancelled")
);
const BeforeComplete = React.lazy(() =>
  import("./components/order/BeforeComplete")
);
const OrderCompleted = React.lazy(() =>
  import("./components/order/OrderCompleted")
);
const CancelReason = React.lazy(() =>
  import("./components/order/CancelReason")
);
const About = React.lazy(() => import("./pages/About"));
const TermsCondition = React.lazy(() => import("./pages/TermsCondition"));
const Career = React.lazy(() => import("./components/career/Career"));
const Contact = React.lazy(() => import("./pages/HelpAndSupport"));
const RegisterProfessional = React.lazy(() =>
  import("./pages/RegisterProfessional")
);
const Refer = React.lazy(() => import("./components/refer/Refer"));
const Payment = React.lazy(() => import("./components/payment/Payment"));
const PaymentMethods = React.lazy(() =>
  import("./components/payment/PaymentMethod")
);
const PaymentSuccess = React.lazy(() =>
  import("./components/payment/PaymentSuccess")
);
const HelpAndSupport = React.lazy(() => import("./pages/HelpAndSupport"));
const ChatWithUs = React.lazy(() => import("./pages/ChatWithUs"));
const ProfileSetting = React.lazy(() => import("./pages/ProfileSetting"));
const MyBooking = React.lazy(() => import("./pages/ProfileSetting"));
const DeleteAccount = React.lazy(() => import("./pages/DeleteAccount"));
const MyAMCPlan = React.lazy(() => import("./pages/MyAMCPlan"));
const ManageAddresses = React.lazy(() => import("./pages/ManageAddresses"));
const FavouriteItems = React.lazy(() => import("./pages/FavouriteItem"));

function App() {
 
 

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/terms&condition" element={<TermsCondition />} />
            <Route path="/privacy" element={<Home />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/register-for-professional"
              element={<RegisterProfessional />}
            />
            <Route path="/services" element={<ServiceusPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/all-brands" element={<AllBrands />} />
             <Route path="/product-detail" element={<ProductDetailPage />} />

            <Route path="/service-request" element={<ServiceRequest />} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-method" element={<PaymentMethods />} />
            <Route path="/profile" element={<ProfileSetting />} />
            <Route path="/my-booking" element={<MyBooking />} />
            <Route path="/beforeComplete" element={<BeforeComplete />} />
            <Route path="/orderCompleted" element={<OrderCompleted />} />
            <Route path="/orderCancelled" element={<OrderCancelled />} />
            <Route path="/cancelReason" element={<CancelReason />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/my-amc-plain" element={<MyAMCPlan />} />
            <Route path="/manage-addresses" element={<ManageAddresses />} />
            <Route path="/favourite-items" element={<FavouriteItems />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/chat" element={<ChatWithUs />} />
            <Route path="/help-support" element={<HelpAndSupport />} />
            <Route path ="/loginpage" element= {<Login/>}/>
            <Route path ="/registerpage" element= {<Register/>}/>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
