import { Link } from "react-router-dom";
import "./OrderConfirmedPage.scss";

function OrderConfirmedPage() {
  return (
    <>
      <main className="confirmation">
        <section className="xbox-game-header">
          <Link to="/menu">
            <h2 className="xbox-game-header__logo">[G]</h2>
          </Link>
        </section>

        <div className="confirmation-container">
          <h2 className="confirmation__title">Order placed successfully !</h2>

          <h2 className="confirmation__text">
            Your order details and receipt will be sent to you via email
          </h2>

          <Link to="/menu">
            <button className="confirmation__btn" type="submit">
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default OrderConfirmedPage;
