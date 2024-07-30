
export const CreateOrder = async (products: number[], token: string) => {
  try {
    // const response = await fetch(`http://localhost:4000/orders`, {
      const response = await fetch(`https://zkxnlxm3-4000.brs.devtunnels.ms/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, 
      },
      body: JSON.stringify({
        products: products, 
      }),
    });
    const orders = await response.json();
    console.log("orders", orders);
    return orders;
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
};

export const getOrders = async (token: string) => {
  try {
    // const response = await fetch(`http://localhost:4000/users/orders`, {
      const response = await fetch(`https://zkxnlxm3-4000.brs.devtunnels.ms/users/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, 
      },
    });
    console.log ("responsesf", response);
    const orders = await response.json();
    return orders;
    console.log("ordersdgg", orders);
    } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
};
