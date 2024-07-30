


interface Idetails {
  
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}
const ProductDetails: React.FC<Idetails> = ({id, name, image, price, description }) => {
 
  return (
    <section className="mt-20 p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row  bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/3 h-auto object-cover"
         
        />
        <div className="p-4 md:p-6 flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-600">STORE</h2>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">{id}</h1>
          <p className="text-2xl font-bold text-gray-800 mt-2">{name}</p>
          <p className="text-xl text-gray-700 mt-2">${price}</p>
          <p className="text-gray-600 mt-2">{description}</p>
     
     
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
