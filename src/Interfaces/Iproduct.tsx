interface Iproduct {
    count: number;
    id: number | string | null;
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
    categoryId: number;
}

export default Iproduct;