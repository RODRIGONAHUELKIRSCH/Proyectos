const stripe=Stripe('pk_test_51OqjBxEAt8EqBreNiZ5eehZV8f6QE5ZDXK51QRSecMhvArQiAq6PcKDujRi6u1n9Qo8L0JxCzT8FbpNgtIwC2WNq00sOc6epUT');

initialize();
checkStatus();
const appearence={
    theme:'stripe',

    variables:{

        fontFamily:'Josefin Sans',
        colorText:'#0e4a67',
        colorBackground: '#ffffff',
        colorDanger: '#df1b41'
        
    }

};

const options={
    business:'Hecho a Mano'
};

async function initialize() {  
    const {clientSecret}=await fetch("localhost/pps1pruebanode/paystripe.php",{
        method:'post',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({$prod}),
    }).then((r)=>r.json());
}

 elements=stripe.elements({clientSecret});

const paymentElement=elements.create("payment",paymentElementOptions);
paymentElement.mount('#payment-element');

async function handlesubmit(e){
    e.preventDefault();
    setLoading(true);

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost/pps1pruebanode/comprar.php",
        },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
      } else {
        showMessage("An unexpected error occurred.");
      }
    
      setLoading(false);
    
}

async function checkStatus() {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
  
    if (!clientSecret) {
      return;
    }
  
    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
  
    switch (paymentIntent.status) {
      case "succeeded":
        showMessage("Pago Confirmado!");
        break;
      case "processing":
        showMessage("Su pago esta siendo procesado.");
        break;
      case "requires_payment_method":
        showMessage("No se ha podido realizar el pago. Intentelo de nuevo");
        break;
      default:
        showMessage("Ha ocurrido un problema.");
        break;
    }
  }