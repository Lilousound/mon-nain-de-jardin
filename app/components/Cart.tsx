function Cart() {
const pipePrice = 8
const zenPrice = 10
const pellePrice = 15
const lampePrice = 12
return (<div className="cart">
    <h2>Panier</h2>
    <ul>
    <li>Nain à la pipe : {pipePrice}€</li>
     <li>Nain zen : {zenPrice}€</li>
     <li>Nain à la pelle : {pellePrice}€</li>
     <li>Nain à la Lampe : {lampePrice}€</li>
    </ul>
    <br />
      Total : {pipePrice + zenPrice + pellePrice + lampePrice}€
      </div>)
}

export default Cart
