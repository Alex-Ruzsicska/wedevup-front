export type Car = {
    availability: {maxDuration: Number, maxDistance: Number};
    brand: String;
    id: Number;
    model: String;
    pricePerDay: Number;
    pricePerKm: Number;
    imageUrl?: string;
}
