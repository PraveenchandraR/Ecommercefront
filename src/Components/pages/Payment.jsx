import React from "react";
import '../Styles/payment.css';


function Payment() {
    return (
        <>
            {/* <ProfileRow />
        <Navigation /> */}
        <div className="payment">
            
            <div> <h1>Payment gateway</h1><br />
                <h3>choose your method of payment</h3><br />
            </div>
                <div className="paybox">
                      <div className="paytype">
                <span className="payname">UPI :</span>
                <span className="payname">card :</span>
            </div>
           </div>
          
            <button className="paybtn">Pay</button>
            </div>
            </>
    )
}
export default Payment;