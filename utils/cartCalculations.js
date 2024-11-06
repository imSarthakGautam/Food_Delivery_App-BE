
 const cartCalculations = (cartItems) => {
    const platformFee = 20; // fixed platform fee, can be configured elsewhere if needed
    let totalMRP = 0;
    let totalDiscount = 0;

    cartItems.forEach((item) => {
        const itemQuantity = item.quantity || 1;
        totalMRP += item.price * itemQuantity;
        totalDiscount += item.discount * itemQuantity;
    });

    const finalAmount = totalMRP - totalDiscount + platformFee;

    return {
        totalMRP,
        totalDiscount,
        platformFee,
        finalAmount,
    };
}

module.exports.cartCalculations =  cartCalculations ;
