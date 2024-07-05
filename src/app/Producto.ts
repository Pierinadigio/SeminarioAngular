export interface Producto {
    id: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string;
    agotado: boolean;
    quantity: number;
}