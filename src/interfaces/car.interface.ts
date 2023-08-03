export interface Car {
    brand: string;
    model: string;
    color: string;
    gas: "gasoline" | "electric" | "hybrid";
    year: number;
    description: string;
    price: number;
}