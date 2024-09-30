declare const randomUUID: any;
declare const fs: any;
declare const products: {
    productId: string;
    productIdView: string;
    name: string;
    friendlyName: string;
    currency: string;
    price: {
        discountPercent: number;
        sales: {
            value: number;
            currency: string;
            formatted: string;
            decimalPrice: string;
        };
        list: any;
    };
    rating: number;
    line: string;
    tags: {
        tagName: string;
        color: string;
    }[];
    categoryName: string;
    images: {
        medium: {
            alt: string;
            url: string;
            index: string;
            title: string;
            absURL: string;
        }[];
    };
    orderable: boolean;
    inStock: boolean;
    installments: {
        maxInstallments: number;
        minInstallmentsValue: number;
    };
    variations: any[];
    hasVariations: boolean;
    shortDescription: string;
    brand: string;
    isAvailableInAllDCs: boolean;
}[];
declare let convert: () => void;
