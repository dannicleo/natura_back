export declare const products: {
    id: string;
    productIdView: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: {
        alt: string;
        url: string;
        index: string;
        title: string;
        absURL: string;
    }[];
    brand: string;
    category: {
        connect: {
            id: string;
        };
    };
}[];
