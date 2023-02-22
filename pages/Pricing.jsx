import * as React from "react";

function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <>
      <div className="text-xl  font-bold mt-5 sm:mt-10 text-gray-600">
        Yoga Barn Class Packages
      </div>
      <div className="text-xs font-semibold mt-1 text-gray-500">
        Virtual yoga coming soon!
      </div>
      <div className="max-w-screen border-b-2"></div>
      <div className="flex-wrap lg:flex justify-center">
        {/* new student special */}
        <div className="mb-4 ml-0 sm:ml-6">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8RcDKe3ucAI14dX0Suo4t"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>

        {/* zen package */}
        <div className="border-b-2 mb-4">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8V4DKe3ucAI14LxIj2nAg"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
        {/* enligtened package */}
        <div className="border-b-2 mb-4 pb-4 mt-2">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8WTDKe3ucAI14WthJWens"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
        {/* warrior package */}
        <div className="border-b-2 mb-4">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8hGDKe3ucAI14fCxXz7yi"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
