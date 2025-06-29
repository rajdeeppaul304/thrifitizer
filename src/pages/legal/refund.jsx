import React, { useRef } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";

const RefundPolicy = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <DarkTheme>
      <Head>
        <title>Refund Policy</title>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>

      <Navbar nr={navbarRef} lr={logoRef} />

      <section className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-left">
            <h1 className="mb-4 text-center">Refund Policy</h1>

            <p>
              We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
            </p>

            <p>
              To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
            </p>

            <p>
              To start a return, you can contact us at <a href="mailto:praveen@thriftizer.com" style={{textDecoration: 'underline'}}>praveen@thriftizer.com</a>. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS]
            </p>

            <p>
              If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
            </p>

            <p>
              You can always contact us for any return question at <a href="mailto:praveen@thriftizer.com" style={{textDecoration: 'underline'}}>praveen@thriftizer.com</a>.
            </p>

            <p className="my-bold-class">Damages and issues</p>
            <p>
              Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
            </p>

            <p className="my-bold-class">Exceptions / non-returnable items</p>
            <p>
              Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.
            </p>

            <p>
              Unfortunately, we cannot accept returns on sale items or gift cards.
            </p>

            <p className="my-bold-class">Exchanges</p>
            <p>
              The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
            </p>

            <p className="my-bold-class">European Union 14 day cooling off period</p>
            <p>
              Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
            </p>

            <p className="my-bold-class">Refunds</p>
            <p>
              We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>

            <p>
              If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="mailto:praveen@thriftizer.com" style={{textDecoration: 'underline'}}>praveen@thriftizer.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .my-bold-class {
          font-weight: 700;
          font-size: 22px;
          margin-top: 2rem;
        }
      `}</style>
    </DarkTheme>
  );
};

export default RefundPolicy;
