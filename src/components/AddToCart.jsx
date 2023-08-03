function addToCart(e, product, cart, setCart) {
    if (e.target.textContent.toLowerCase() === "add to cart")
      setCart = setCart((prev) => [...prev, product]);
    e.target.textContent = "Added to cart";
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  }
  export { addToCart };
  
  function addToCartText(cart,item) {
    
      return cart.some((cartItem) => cartItem.foodName === item.foodName)
        ? "Added To Cart"
        : "Add To Cart";
    
  }
  export {addToCartText}