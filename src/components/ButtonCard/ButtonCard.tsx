
'use client'
import { useAuth } from "@/Context/AuthContext";
import { toast } from 'sonner';


interface IProduct {
  id: number;
 
}

interface ButtonAddToCartProps {
  product: any;
}
export const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ product }) => {
  const { token, DataUser, setCartProducts } = useAuth();

  const handleAddToCart = () => {
    if (!token) {
      toast.warning('Debes iniciar sesión para agregar productos al carrito.');
      return;
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    
    const isProductInCart = cart.some((item: IProduct) => item.id === product.id);

    if (isProductInCart) {
      toast.info('Este producto ya está en el carrito.');
      return;
    }
      cart.push(product);
      
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartProducts(cart); 
      toast.success('Producto agregado al carrito');
     
    }
  };

  return (
    <div>
  
      {token && DataUser ? (
       <button onClick={handleAddToCart}  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Agregar Al Carrito</button>
      ) : (
        <button onClick={() => toast.error('Por favor, inicia sesión para comprar')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Agregar Al Carrito</button>
      )}
    </div>
  );
};

export default ButtonAddToCart;


