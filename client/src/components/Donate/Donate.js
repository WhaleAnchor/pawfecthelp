import { useState, useEffect } from "react";
import logo from '../../Assets/logo.png'
import './Donate.css';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const ProductDisplay = ({price}) => (
      <div className="donate-wrapper" id="Donate">
        <section className="Donate">
          
          <div className="product">
              <img
              height="300px"
              width="300px"
              src={logo}
              alt="The cover of Stubborn Attachments"
              />
              <div className="description">
              
              <h3>Donate To The Doggos</h3>
              <div className="introduction"><p>All proceeds from our website go directly to supporting local pet shelters. 
              Your donations help provide necessary resources such as food, medical care, and shelter for abandoned and homeless animals.
              Thank you for being a part of this movement.</p></div>
              
              </div>
          </div>

          <form className="buttonMe" action={"http://localhost:3001/create-checkout-session" || "https://a-pawfect-match.herokuapp.com/"} method="POST">
              <MDBInput
                      defaultValue= {price}
                      name="price"
                      type="text"
                      label="$"
                  />
                  <br />
              <MDBBtn type="submit">
              Pay Now
              </MDBBtn>
          </form>

        </section>
      </div>
  );
  
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  

export const Donate = () => {
        const [message, setMessage] = useState("");
        const [price, setPrice] = useState("")
      
        useEffect(() => {
          // Check to see if this is a redirect back from Checkout
          const query = new URLSearchParams(window.location.search);

          if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
          }
      
          if (query.get("canceled")) {
            setMessage(
              "Order canceled -- continue to shop around and checkout when you're ready."
            );
          }
        }, []);

        return message ? (
          <Message message={message} />
        ) : (
          <ProductDisplay price={price} />
        );
        
}

export default Donate;
