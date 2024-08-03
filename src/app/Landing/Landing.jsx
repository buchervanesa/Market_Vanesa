 /* eslint-disable @next/next/no-img-element */
import React from "react";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export const Landing = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-20">
    <header className="text-center p-6">
      <h1 className="text-6xl font-bold text-white mb-4">Bienvenidos a Nuestra Tienda</h1>
      <p className="text-2xl  text-gray-300 mb-6">Encuentra los mejores productos a los mejores precios</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        <a href="./product">Explora Ahora</a>
      </button>
    </header>
  
    <section className="carousel-section w-full max-w-6xl mt-8 relative">
      <h2 className="text-4xl font-semibold text-white text-center mb-6">Productos de Calidad</h2>
      <Slider {...carouselSettings}>
        <div className="relative rounded-lg ">
          <img src="https://tiendazero.com.uy/wp-content/uploads/Banner-apple-iphone-14.webp" width={800} 
    height={232} alt="Producto 1" className="w-full rounded-3xl h-58" />
          <div className="">
            <p className=""></p>
          </div>
        </div>
        <div>
          <img src="https://storage.googleapis.com/tradeinn-images/images/landing-pages/eng_appleLP-6.jpg"  width={800} 
    height={232} alt="Producto 2" className="w-full rounded-3xl h-58" />
          <div className="absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 rounded-br-3xl">
            <p className="text-left text-white">Producto 2</p>
          </div>
        </div>
      
       
      </Slider>
    </section>
  
  
      <section className="featured-products p-6 w-full max-w-6xl mt-3 rounded-lg">
        <h2 className="text-4xl font-semibold text-white mb-6">Variedad de Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="product-card bg-white p-4 rounded-lg shadow-md text-center">
        
            <img src={"https://i.ebayimg.com/images/g/1WkAAOSwcrphzWAR/s-l400.jpg"} alt="Computadoras" className="w-svw" />
            <h3 className="text-xl text-black font-semibold mb-2">COMPUTADORAS</h3>
            <p className="text-gray-700 mb-5">Encuentra la mejor selección de computadoras de última generación.</p>
          </div>
          <div className="product-card bg-white p-4 rounded-lg shadow-md text-center">
       
            < img src={"https://images.fravega.com/f500/60377252c47a065e4a6bb55660950386.jpg"} alt="Celulares" className="w-svw mx-auto" />
            <h3 className="text-xl text-black font-semibold mb-2">CELULARES</h3>
            <p className="text-gray-700 mb-4">Explora nuestra variedad de celulares con la tecnología más avanzada.</p>
          </div>
          <div className="product-card bg-white p-4 rounded-lg shadow-md text-center">
       
            <img src={"https://i5.walmartimages.com/asr/2830c8d7-292d-4b99-b92f-239b15ff1062.ce77d20b2f20a569bfd656d05ca89f7c.jpeg"} alt="AirPods" className="w-svw mx-auto mb-2" />
            <h3 className="text-xl text-black font-semibold mb-2">ACCESORIOS</h3>
            <p className="text-gray-700 mb-4">Disfruta de la mejor calidad con nuestros Accesorios.</p>
          </div>
        </div>
      </section>

      <section className="payment-methods bg-gray-900 p-6 w-full max-w-6xl mt-10 rounded-lg">
        <h2 className="text-4xl font-semibold text-yellow-300 text-center mb-6">Medios de Pago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
          <div className="flex-1 payment-card bg-white p-4 rounded-lg shadow-md text-center">
  
            <img src="//static.vecteezy.com/system/resources/previews/010/287/597/non_2x/wallet-icon-isolated-on-a-white-background-wallet-earnings-and-money-symbols-for-web-and-mobile-apps-free-vector.jpg" alt="Tarjetas de Crédito" className="w-36 h-36 mx-auto" />
            <h3 className=" text-yellow-400 mt-0 text-xl font-semibold mb-2">Tarjetas de Crédito</h3>
            <p className="text-gray-900 mb-4">Aceptamos todas las tarjetas de crédito.</p>
          </div>

  
          <div className="payment-card bg-white p-4 rounded-lg shadow-md text-center">
     
            <img src="//Image.freepik.com/vector-premium/icono-billetera-simbolo-dolar-icono-vector-billetera-digital-signo-estilo-lineal-concepto-movil_615232-309.jpg" alt="Efectivo" className="mt-2 w-36 h-34 mx-auto mb-4" />
            <h3 className="text-yellow-400 text-xl font-semibold mb-2">Efectivo</h3>
            <p className="text-gray-900">Puedes pagar en efectivo en nuestras tiendas físicas.</p>
          </div>

          {/* Billeteras Digitales */}
          <div className="payment-card bg-white p-4 rounded-lg shadow-md text-center">
       
            <img src="//static.vecteezy.com/system/resources/previews/014/581/558/non_2x/smartphone-digital-wallet-icon-simple-style-vector.jpg" alt="Billeteras Digitales" className="w-36 h-36 mx-auto mb-4" />
            <h3 className="text-yellow-400 text-xl font-semibold mb-2">Billeteras Digitales</h3>
            <p className="text-gray-900 mb-4">Aceptamos pagos con billeteras digitales como PayPal y MercadoPago.</p>
          </div>
        </div>
      </section>

      <section className="security bg-gray-900 p-6 w-full max-w-6xl mt-10 rounded-lg text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">Seguridad de principio a fin</h2>
        <p className="text-gray-300 text-lg mb-6">
          Tu seguridad es nuestra prioridad. Contamos con los más altos estándares de seguridad para proteger tus datos y garantizar una experiencia de compra segura.
        </p>
      </section>

      <section className="register-now bg-gray-900 p-6 w-full max-w-6xl mt-10 rounded-lg text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">Regístrate Ahora</h2>
        <p className="text-gray-300 text-lg mb-6">¡Regístrate ahora y empieza tu compra!</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
          <a href="./Register">Regístrate</a>
        </button>
      </section>

      <section className="about-us bg-gray-900 p-6 w-full max-w-6xl mt-10 rounded-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">Sobre Nosotros</h2>
        <p className="text-gray-300 text-lg">
          Somos una tienda comprometida a ofrecer productos de la más alta calidad a precios asequibles. Nuestra misión es proporcionar una experiencia de compra excepcional para todos nuestros clientes.
        </p>
      </section>

      <section className="contact-us bg-gray-900 p-6 w-full max-w-6xl mt-10 rounded-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">Contáctanos</h2>
        <p className="text-gray-300 text-lg mb-4">
          Si tienes alguna pregunta o inquietud, no dudes en contactarnos. Estamos para ayudarte en todo lo que necesites.
        </p>
        <ul className="text-gray-300 text-lg space-y-2">
    <li><strong>Teléfono:</strong> +123 456 789</li>
    <li><strong>Email:</strong> Electroshop@gmail.com</li>
    <li><strong>Ubicación:</strong> Mitre 6961, Posadas, Misiones</li>
  </ul>
      </section>
    </div>
  );
};
export default Landing
