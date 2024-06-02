import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const client_reference_id = "0909090998909";
  const prefilled_email = "aayush@gmail.com";
  return (
    <div>
      {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1PN5VpSHKx9piKASeETEVxWL"
        publishable-key="pk_test_51PN5QWSHKx9piKASEoQidjvgYgryEqzzyQ9vmxOed5ocB4eEqmzusyNJ9acwmBg0IgmV1yl4gaIniPKxanDiQK3a00l2ZbFRm5"
      ></stripe-buy-button> */}
      <Link
        href={`https://buy.stripe.com/test_6oEeX94nnbIx4j6bII?client_reference_id=${client_reference_id}&prefilled_email=${prefilled_email}`}
      >
        <button>Strip pay</button>
      </Link>
    </div>
  );
}
