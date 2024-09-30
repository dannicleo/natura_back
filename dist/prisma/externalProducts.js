const { randomUUID } = require("crypto");
const fs = require("fs");
const products = [
    {
        "productId": "NATBRA-108404",
        "productIdView": "NATBRA-108404",
        "name": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
        "friendlyName": "Kaiak Aero Masculino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 172.9,
                "currency": "BRL",
                "formatted": "R$ 172,90",
                "decimalPrice": "172.90"
            },
            "list": null
        },
        "rating": 4.1,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw00c802f7/NATBRA-108404_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw00c802f7/NATBRA-108404_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw594d3358/NATBRA-108404_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw594d3358/NATBRA-108404_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4bfe0420/NATBRA-108404_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Kaiak Aero Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4bfe0420/NATBRA-108404_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 34.58
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Kaiak Aero: o encontro revigorante do vento com a água do mar",
        "brand": "Kaiak",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-81951",
        "productIdView": "NATBRA-81951",
        "name": "Desodorante Perfume Natura Homem Sagaz 100 ml",
        "friendlyName": "Natura Homem Sagaz 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 204.9,
                "currency": "BRL",
                "formatted": "R$ 204,90",
                "decimalPrice": "204.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd0298913/Produtos/PRODUTO/NATBRA-81951_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd0298913/Produtos/PRODUTO/NATBRA-81951_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw40085b4a/Produtos/PRODUTO/NATBRA-81951_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw40085b4a/Produtos/PRODUTO/NATBRA-81951_2.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb9e4f850/Produtos/PRODUTO/NATBRA-81951_3.jpg",
                    "index": "2",
                    "title": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb9e4f850/Produtos/PRODUTO/NATBRA-81951_3.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdb40fbfd/Produtos/PRODUTO/NATBRA-81951_4.jpg",
                    "index": "3",
                    "title": "Desodorante Perfume Natura Homem Sagaz 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdb40fbfd/Produtos/PRODUTO/NATBRA-81951_4.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 34.15
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Descubra a Fragrância Amadeirada de Natura Homem Sagaz",
        "brand": "Natura Homem",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-76420",
        "productIdView": "NATBRA-76420",
        "name": "Desodorante Perfume Essencial Masculino 100 ml",
        "friendlyName": "Essencial Masculino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 259.9,
                "currency": "BRL",
                "formatted": "R$ 259,90",
                "decimalPrice": "259.90"
            },
            "list": null
        },
        "rating": 3.5,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Essencial Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw79321fdc/NATBRA-76420_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Essencial Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw79321fdc/NATBRA-76420_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Essencial Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7c1edcf6/NATBRA-76420_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Essencial Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7c1edcf6/NATBRA-76420_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 43.31666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Essencial Deo Parfum Masculino: uma potência em fragrância",
        "brand": "Essencial",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-53255",
        "productIdView": "NATBRA-53255",
        "name": "Desodorante Colônia Natura Homem Masculino 100 ml",
        "friendlyName": "Natura Homem 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 184.9,
                "currency": "BRL",
                "formatted": "R$ 184,90",
                "decimalPrice": "184.90"
            },
            "list": null
        },
        "rating": 4.6,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Natura Homem Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw362239d1/NATBRA-53255_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Natura Homem Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw362239d1/NATBRA-53255_1.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 30.816666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Natura Homem: a fragrância da deo colônia amadeirada",
        "brand": "Natura Homem",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-20214",
        "productIdView": "NATBRA-20214",
        "name": "Óleo Desodorante Corporal Sève Pimenta Rosa 200 ml",
        "friendlyName": "Óleo Desodorante Corporal Sève Pimenta Rosa",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 105.9,
                "currency": "BRL",
                "formatted": "R$ 105,90",
                "decimalPrice": "105.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 200 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "óleo corporal",
        "images": {
            "medium": [
                {
                    "alt": "Óleo Desodorante Corporal Sève Pimenta Rosa 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc71e498e/NATBRA-20214_1.jpg",
                    "index": "0",
                    "title": "Óleo Desodorante Corporal Sève Pimenta Rosa 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc71e498e/NATBRA-20214_1.jpg"
                },
                {
                    "alt": "Óleo Desodorante Corporal Sève Pimenta Rosa 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dweccf21fb/NATBRA-20214_2.jpg",
                    "index": "1",
                    "title": "Óleo Desodorante Corporal Sève Pimenta Rosa 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dweccf21fb/NATBRA-20214_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 3,
            "minInstallmentsValue": 35.3
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Pele macia com toque sensual e exótico",
        "brand": "Sève",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-70825",
        "productIdView": "NATBRA-70825",
        "name": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
        "friendlyName": "Desodorante Antitranspirante Roll-On Erva Doce",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 27.9,
                "currency": "BRL",
                "formatted": "R$ 27,90",
                "decimalPrice": "27.90"
            },
            "list": null
        },
        "rating": 3.8,
        "line": "null | 70 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "roll-on",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7c93e626/NATBRA-70825_1.jpg",
                    "index": "0",
                    "title": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7c93e626/NATBRA-70825_1.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw8fae27a7/NATBRA-70825_2.jpg",
                    "index": "1",
                    "title": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw8fae27a7/NATBRA-70825_2.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4a1d739c/NATBRA-70825_3.jpg",
                    "index": "2",
                    "title": "Desodorante Antitranspirante Roll On Erva Doce 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4a1d739c/NATBRA-70825_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 27.9
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Além de proteger e perfumar, evita manchas nas roupas.",
        "brand": "Erva Doce",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-100383",
        "productIdView": "NATBRA-100383",
        "name": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
        "friendlyName": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 51.4,
                "currency": "BRL",
                "formatted": "R$ 51,40",
                "decimalPrice": "51.40"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "para corpo",
        "images": {
            "medium": [
                {
                    "alt": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw75b929bb/NATBRA-100383_1.jpg",
                    "index": "0",
                    "title": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw75b929bb/NATBRA-100383_1.jpg"
                },
                {
                    "alt": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw89e5c7c3/NATBRA-100383_3.jpg",
                    "index": "1",
                    "title": "Refil Creme Desodorante Nutritivo Para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw89e5c7c3/NATBRA-100383_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 51.4
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Surpreenda-se com a fragrância autêntica e atraente que deixa sua pele macia e perfumada.",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-108407",
        "productIdView": "NATBRA-108407",
        "name": "Desodorante Colônia Kaiak Feminino 100 ml",
        "friendlyName": "Kaiak Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 172.9,
                "currency": "BRL",
                "formatted": "R$ 172,90",
                "decimalPrice": "172.90"
            },
            "list": null
        },
        "rating": 4.4,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw9fd33e29/NATBRA-108407_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw9fd33e29/NATBRA-108407_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw824e505a/NATBRA-108407_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw824e505a/NATBRA-108407_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw10c5b487/NATBRA-108407_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Kaiak Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw10c5b487/NATBRA-108407_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 34.58
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Experimente o frescor vibrante de Natura Kaiak feminino",
        "brand": "Kaiak",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-76421",
        "productIdView": "NATBRA-76421",
        "name": "Desodorante Perfume Essencial Feminino 100 ml",
        "friendlyName": "Essencial Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 259.9,
                "currency": "BRL",
                "formatted": "R$ 259,90",
                "decimalPrice": "259.90"
            },
            "list": null
        },
        "rating": 4.6,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Essencial Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw125eb148/NATBRA-76421_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Essencial Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw125eb148/NATBRA-76421_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Essencial Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw098a88da/NATBRA-76421_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Essencial Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw098a88da/NATBRA-76421_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 43.31666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Conheça Essencial Natura",
        "brand": "Essencial",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-103144",
        "productIdView": "NATBRA-103144",
        "name": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio 50 g",
        "friendlyName": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 98.9,
                "currency": "BRL",
                "formatted": "R$ 98,90",
                "decimalPrice": "98.90"
            },
            "list": null
        },
        "rating": 3.7,
        "line": "null | 50 g",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "proteção solar",
        "images": {
            "medium": [
                {
                    "alt": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio 50 g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw76f5e5a5/NATBRA-103144_1.jpg",
                    "index": "0",
                    "title": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio 50 g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw76f5e5a5/NATBRA-103144_1.jpg"
                },
                {
                    "alt": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio 50 g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw643be348/NATBRA-103144_2.jpg",
                    "index": "1",
                    "title": "Protetor Facial Gel Creme FPS 60 FPUVA 20 Fotoequilíbrio 50 g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw643be348/NATBRA-103144_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 3,
            "minInstallmentsValue": 32.97
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "A vida é mais bonita ao sol.",
        "brand": "Fotoequilíbrio",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-125366",
        "productIdView": "NATBRA-125366",
        "name": "Desodorante Perfume Natura Homem Elo 100 ml",
        "friendlyName": "Natura Homem Elo 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 204.9,
                "currency": "BRL",
                "formatted": "R$ 204,90",
                "decimalPrice": "204.90"
            },
            "list": null
        },
        "rating": 4.7,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw87e3fe7c/NATBRA-125366_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw87e3fe7c/NATBRA-125366_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6e3a3957/NATBRA-125366_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6e3a3957/NATBRA-125366_2.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwa3db1e9c/NATBRA-125366_3.jpg",
                    "index": "2",
                    "title": "Desodorante Perfume Natura Homem Elo 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwa3db1e9c/NATBRA-125366_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 34.15
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Homem Elo Natura: A Conexão Inspirada na Pluralidade Masculina",
        "brand": "Natura Homem",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-108400",
        "productIdView": "NATBRA-108400",
        "name": "Desodorante Colônia Kaiak Masculino 100 ml",
        "friendlyName": "Kaiak Masculino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 172.9,
                "currency": "BRL",
                "formatted": "R$ 172,90",
                "decimalPrice": "172.90"
            },
            "list": null
        },
        "rating": 3.7,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdaff5036/NATBRA-108400_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdaff5036/NATBRA-108400_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb6f9a7cf/NATBRA-108400_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb6f9a7cf/NATBRA-108400_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd40d8b6b/NATBRA-108400_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd40d8b6b/NATBRA-108400_3.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe8f03828/NATBRA-108400_4.jpg",
                    "index": "3",
                    "title": "Desodorante Colônia Kaiak Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe8f03828/NATBRA-108400_4.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 34.58
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Kaiak Desodorante Colônia Masculino: a força das águas",
        "brand": "Kaiak",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-71602",
        "productIdView": "NATBRA-71602",
        "name": "Desodorante Colônia Biografia Assinatura Feminino 100 ml",
        "friendlyName": "Biografia Assinatura Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 185.9,
                "currency": "BRL",
                "formatted": "R$ 185,90",
                "decimalPrice": "185.90"
            },
            "list": null
        },
        "rating": 3.2,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Biografia Assinatura Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb88edc9c/NATBRA-71602_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Biografia Assinatura Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb88edc9c/NATBRA-71602_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Biografia Assinatura Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf8d71c7d/NATBRA-71602_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Biografia Assinatura Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf8d71c7d/NATBRA-71602_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 30.983333333333334
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Biografia Assinatura: escreva sua história",
        "brand": "Biografia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-95560",
        "productIdView": "NATBRA-95560",
        "name": "Desodorante Perfume Essencial Supreme Masculino 100 ml",
        "friendlyName": "Essencial Supreme Masculino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 259.9,
                "currency": "BRL",
                "formatted": "R$ 259,90",
                "decimalPrice": "259.90"
            },
            "list": null
        },
        "rating": 3.1,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Essencial Supreme Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwbe7ae9dc/NATBRA-95560_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Essencial Supreme Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwbe7ae9dc/NATBRA-95560_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Essencial Supreme Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw9c654448/NATBRA-95560_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Essencial Supreme Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw9c654448/NATBRA-95560_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 43.31666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Deo Parfum Natura Essencial Supreme: uma Expressão de intensidade",
        "brand": "Essencial",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-76423",
        "productIdView": "NATBRA-76423",
        "name": "Desodorante Perfume Essencial Exclusivo Feminino 100 ml",
        "friendlyName": "Essencial Exclusivo Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 259.9,
                "currency": "BRL",
                "formatted": "R$ 259,90",
                "decimalPrice": "259.90"
            },
            "list": null
        },
        "rating": 3.8,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Essencial Exclusivo Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw191664d0/NATBRA-76423_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Essencial Exclusivo Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw191664d0/NATBRA-76423_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Essencial Exclusivo Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1c3b1f02/NATBRA-76423_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Essencial Exclusivo Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1c3b1f02/NATBRA-76423_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 43.31666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Essencial exclusivo feminino: Essencial é poder ser",
        "brand": "Essencial",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-69049",
        "productIdView": "NATBRA-69049",
        "name": "Protetor Clareador FPS 70 Chronos",
        "friendlyName": "Protetor Clareador FPS 70 Chronos",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 107.9,
                "currency": "BRL",
                "formatted": "R$ 107,90",
                "decimalPrice": "107.90"
            },
            "list": null
        },
        "rating": 3.4,
        "line": "null | 50 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "proteção solar",
        "images": {
            "medium": [
                {
                    "alt": "Protetor Clareador FPS 70 Chronos",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfe4d736a/NATBRA-69049_1.jpg",
                    "index": "0",
                    "title": "Protetor Clareador FPS 70 Chronos",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfe4d736a/NATBRA-69049_1.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 3,
            "minInstallmentsValue": 35.97
        },
        "variations": [],
        "hasVariations": true,
        "shortDescription": "Descubra o Protetor Solar Chronos: Proteção, Clareamento e Cobertura Natural",
        "brand": "Chronos",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-92786",
        "productIdView": "NATBRA-92786",
        "name": "Mamãe e Bebê Água de Colônia 100 ml",
        "friendlyName": "Mamãe e Bebê Água de Colônia 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 98.9,
                "currency": "BRL",
                "formatted": "R$ 98,90",
                "decimalPrice": "98.90"
            },
            "list": null
        },
        "rating": 4.8,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "infantil",
        "images": {
            "medium": [
                {
                    "alt": "Mamãe e Bebê Água de Colônia 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw478c320f/NATBRA-92786_1.jpg",
                    "index": "0",
                    "title": "Mamãe e Bebê Água de Colônia 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw478c320f/NATBRA-92786_1.jpg"
                },
                {
                    "alt": "Mamãe e Bebê Água de Colônia 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd59e1511/NATBRA-92786_2.jpg",
                    "index": "1",
                    "title": "Mamãe e Bebê Água de Colônia 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd59e1511/NATBRA-92786_2.jpg"
                },
                {
                    "alt": "Mamãe e Bebê Água de Colônia 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw648b60f1/NATBRA-92786_3.jpg",
                    "index": "2",
                    "title": "Mamãe e Bebê Água de Colônia 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw648b60f1/NATBRA-92786_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 3,
            "minInstallmentsValue": 32.97
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Água de Colônia para bebê 100ml",
        "brand": "Mamãe e Bebê",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-102419",
        "productIdView": "NATBRA-102419",
        "name": "Desodorante Perfume Ilía Ser Feminino 50 ml",
        "friendlyName": "Ilía Ser 50 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 173.9,
                "currency": "BRL",
                "formatted": "R$ 173,90",
                "decimalPrice": "173.90"
            },
            "list": null
        },
        "rating": 4.1,
        "line": "null | 50 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Ilía Ser Feminino 50 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe18adc9f/NATBRA-102419_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Ilía Ser Feminino 50 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe18adc9f/NATBRA-102419_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Ilía Ser Feminino 50 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw587c957e/NATBRA-102419_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Ilía Ser Feminino 50 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw587c957e/NATBRA-102419_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 34.78
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": " Descubra a envolvente fragrância Ilía Ser",
        "brand": "Ilía",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-96519",
        "productIdView": "NATBRA-96519",
        "name": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão 80 g",
        "friendlyName": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 29.1,
                "currency": "BRL",
                "formatted": "R$ 29,10",
                "decimalPrice": "29.10"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 80 g",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "creme",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão 80 g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwae195bbd/NATBRA-96519_1.jpg",
                    "index": "0",
                    "title": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão 80 g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwae195bbd/NATBRA-96519_1.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão 80 g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7521f8e8/NATBRA-96519_2.jpg",
                    "index": "1",
                    "title": "Desodorante Antitranspirante em Creme Tododia Leite de Algodão 80 g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7521f8e8/NATBRA-96519_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 29.1
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Desodorante Leite de Algodão Natura: Proteção Suave e Rápida",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-100679",
        "productIdView": "NATBRA-100679",
        "name": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
        "friendlyName": "Body Splash Tododia Ameixa e Flor de Baunilha Feminino",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 77.9,
                "currency": "BRL",
                "formatted": "R$ 77,90",
                "decimalPrice": "77.90"
            },
            "list": null
        },
        "rating": 4.7,
        "line": "null | 200 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "desodorante",
        "images": {
            "medium": [
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb420e84b/NATBRA-100679_1.jpg",
                    "index": "0",
                    "title": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb420e84b/NATBRA-100679_1.jpg"
                },
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1d7e8f07/NATBRA-100679_2.jpg",
                    "index": "1",
                    "title": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1d7e8f07/NATBRA-100679_2.jpg"
                },
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw39df3112/NATBRA-100679_3.jpg",
                    "index": "2",
                    "title": "Body Splash Desodorante Colônia Tododia Ameixa e Flor de Baunilha Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw39df3112/NATBRA-100679_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 2,
            "minInstallmentsValue": 38.95
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Surpreenda-se com a fragrância autêntica, atraente e adocicada de Tododia.",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-71603",
        "productIdView": "NATBRA-71603",
        "name": "Desodorante Colônia Biografia Assinatura Masculino 100 ml",
        "friendlyName": "Biografia Assinatura Masculino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 185.9,
                "currency": "BRL",
                "formatted": "R$ 185,90",
                "decimalPrice": "185.90"
            },
            "list": null
        },
        "rating": 4.3,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Biografia Assinatura Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwa871840f/NATBRA-71603_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Biografia Assinatura Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwa871840f/NATBRA-71603_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Biografia Assinatura Masculino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw64b7e21f/NATBRA-71603_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Biografia Assinatura Masculino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw64b7e21f/NATBRA-71603_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 30.983333333333334
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Biografia, escreva sua história",
        "brand": "Biografia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-71600",
        "productIdView": "NATBRA-71600",
        "name": "Desodorante Colônia Biografia Feminino 100 ml",
        "friendlyName": "Biografia Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 185.9,
                "currency": "BRL",
                "formatted": "R$ 185,90",
                "decimalPrice": "185.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Biografia Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw2971653e/NATBRA-71600_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Biografia Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw2971653e/NATBRA-71600_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Biografia Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw50677efd/NATBRA-71600_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Biografia Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw50677efd/NATBRA-71600_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 30.983333333333334
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Biografia Feminino: celebre sua história com fragrâncias atemporais",
        "brand": "Biografia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-2550",
        "productIdView": "NATBRA-2550",
        "name": "Desodorante Colônia Luna Radiante Feminino 75 ml",
        "friendlyName": "Luna Radiante 75 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 169.9,
                "currency": "BRL",
                "formatted": "R$ 169,90",
                "decimalPrice": "169.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 75 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Luna Radiante Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw414e0fb7/Produtos/NATBRA-2550_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Luna Radiante Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw414e0fb7/Produtos/NATBRA-2550_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Radiante Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw883e76e1/Produtos/NATBRA-2550 _2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Luna Radiante Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw883e76e1/Produtos/NATBRA-2550 _2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 33.98
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": " Mostre seu brilho com Luna Radiante e encare a vida de coração aberto",
        "brand": "Luna",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-99818",
        "productIdView": "NATBRA-99818",
        "name": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
        "friendlyName": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 69.9,
                "currency": "BRL",
                "formatted": "R$ 69,90",
                "decimalPrice": "69.90"
            },
            "list": null
        },
        "rating": 4.1,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "para corpo",
        "images": {
            "medium": [
                {
                    "alt": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd8731c72/Produtos/NATBRA-99818_1.jpg",
                    "index": "0",
                    "title": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd8731c72/Produtos/NATBRA-99818_1.jpg"
                },
                {
                    "alt": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw0e6f361d/Produtos/NATBRA-99818_2.jpg",
                    "index": "1",
                    "title": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw0e6f361d/Produtos/NATBRA-99818_2.jpg"
                },
                {
                    "alt": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw906badb5/Produtos/NATBRA-99818_3.jpg",
                    "index": "2",
                    "title": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw906badb5/Produtos/NATBRA-99818_3.jpg"
                },
                {
                    "alt": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw90b34ced/Produtos/NATBRA-99818_4.jpg",
                    "index": "3",
                    "title": "Creme Desodorante Nutritivo para o Corpo Tododia Ameixa e Flor de Baunilha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw90b34ced/Produtos/NATBRA-99818_4.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 2,
            "minInstallmentsValue": 34.95
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Surpreenda-se com a fragrância autêntica e atraente que deixa sua pele macia e perfumada.",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-68943",
        "productIdView": "NATBRA-68943",
        "name": "Desodorante Colônia Kriska Drama Feminino 100 ml",
        "friendlyName": "Kriska Drama 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 142.9,
                "currency": "BRL",
                "formatted": "R$ 142,90",
                "decimalPrice": "142.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Kriska Drama Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf8def095/Produtos/PRODUTO/NATBRA-68943_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Kriska Drama Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf8def095/Produtos/PRODUTO/NATBRA-68943_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kriska Drama Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw527371fb/Produtos/PRODUTO/NATBRA-68943_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Kriska Drama Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw527371fb/Produtos/PRODUTO/NATBRA-68943_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 4,
            "minInstallmentsValue": 35.73
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Kriska Drama: Uma Fragrância Ousada e Feminina",
        "brand": "Kriska",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-95563",
        "productIdView": "NATBRA-95563",
        "name": "Desodorante Perfume Essencial Supreme Feminino 100 ml",
        "friendlyName": "Essencial Supreme Feminino 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 259.9,
                "currency": "BRL",
                "formatted": "R$ 259,90",
                "decimalPrice": "259.90"
            },
            "list": null
        },
        "rating": 3.4,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Essencial Supreme Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb7b57f3b/NATBRA-95563_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Essencial Supreme Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb7b57f3b/NATBRA-95563_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Essencial Supreme Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw2f415c67/NATBRA-95563_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Essencial Supreme Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw2f415c67/NATBRA-95563_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 43.31666666666666
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Essencial Supreme Feminino: Essencial é poder ser.",
        "brand": "Essencial",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-69824",
        "productIdView": "NATBRA-69824",
        "name": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha 400 ml",
        "friendlyName": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 84.9,
                "currency": "BRL",
                "formatted": "R$ 84,90",
                "decimalPrice": "84.90"
            },
            "list": null
        },
        "rating": 4.5,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "corpo e banho",
        "images": {
            "medium": [
                {
                    "alt": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4d7e93c9/NATBRA-69824_1.jpg",
                    "index": "0",
                    "title": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4d7e93c9/NATBRA-69824_1.jpg"
                },
                {
                    "alt": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw5f8131c3/NATBRA-69824_2.jpg",
                    "index": "1",
                    "title": "Polpa Desodorante Hidratante para o Corpo Ekos Castanha 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw5f8131c3/NATBRA-69824_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 2,
            "minInstallmentsValue": 42.45
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Potência biocosmética para revitalizar a pele do seu corpo",
        "brand": "Ekos",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-2817",
        "productIdView": "NATBRA-2817",
        "name": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão 400 ml",
        "friendlyName": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 51.4,
                "currency": "BRL",
                "formatted": "R$ 51,40",
                "decimalPrice": "51.40"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "corpo e banho",
        "images": {
            "medium": [
                {
                    "alt": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw3a3124fb/Produtos/NATBRA-2817_1.jpg",
                    "index": "0",
                    "title": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw3a3124fb/Produtos/NATBRA-2817_1.jpg"
                },
                {
                    "alt": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw22fa20c7/Produtos/NATBRA-2817_2.jpg",
                    "index": "1",
                    "title": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Algodão 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw22fa20c7/Produtos/NATBRA-2817_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 51.4
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Pele mais firme e ultramacia todos os dias",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-41795",
        "productIdView": "NATBRA-41795",
        "name": "Desodorante Colônia Kriska Feminino 100 ml",
        "friendlyName": "Kriska 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 142.9,
                "currency": "BRL",
                "formatted": "R$ 142,90",
                "decimalPrice": "142.90"
            },
            "list": null
        },
        "rating": 4.2,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Kriska Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb6ec0071/NATBRA-41795_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Kriska Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb6ec0071/NATBRA-41795_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kriska Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw60ca30fc/NATBRA-41795_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Kriska Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw60ca30fc/NATBRA-41795_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kriska Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7802539d/NATBRA-41795_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Kriska Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw7802539d/NATBRA-41795_3.jpg"
                },
                {
                    "alt": "Desodorante Colônia Kriska Feminino 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc4aa789a/NATBRA-41795_4.jpg",
                    "index": "3",
                    "title": "Desodorante Colônia Kriska Feminino 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc4aa789a/NATBRA-41795_4.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 4,
            "minInstallmentsValue": 35.73
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Kriska Feminino: Uma Fragrância Vibrante e Atemporal",
        "brand": "Kriska",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-73563",
        "productIdView": "NATBRA-73563",
        "name": "Desodorante Colônia Ekos Frescor Pitanga Feminino 150 ml",
        "friendlyName": "Ekos Frescor Pitanga 150 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 113.9,
                "currency": "BRL",
                "formatted": "R$ 113,90",
                "decimalPrice": "113.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 150 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Ekos Frescor Pitanga Feminino 150 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw41add1d3/Produtos/NATBRA-73563_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Ekos Frescor Pitanga Feminino 150 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw41add1d3/Produtos/NATBRA-73563_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Ekos Frescor Pitanga Feminino 150 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw366ea04a/Produtos/NATBRA-73563_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Ekos Frescor Pitanga Feminino 150 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw366ea04a/Produtos/NATBRA-73563_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 3,
            "minInstallmentsValue": 37.97
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Conheça a fragrância radiante do Frescor Natura Ekos Pitanga",
        "brand": "Ekos",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-72195",
        "productIdView": "NATBRA-72195",
        "name": "Body Splash Desodorante Colônia Tododia Macadâmia Feminino 200 ml",
        "friendlyName": "Body Splash Tododia Macadâmia 200 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 77.9,
                "currency": "BRL",
                "formatted": "R$ 77,90",
                "decimalPrice": "77.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 200 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "body splash",
        "images": {
            "medium": [
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Macadâmia Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw0f108c15/NATBRA-72195_1.jpg",
                    "index": "0",
                    "title": "Body Splash Desodorante Colônia Tododia Macadâmia Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw0f108c15/NATBRA-72195_1.jpg"
                },
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Macadâmia Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwbcb11fa6/NATBRA-72195_2.jpg",
                    "index": "1",
                    "title": "Body Splash Desodorante Colônia Tododia Macadâmia Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwbcb11fa6/NATBRA-72195_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 2,
            "minInstallmentsValue": 38.95
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Body Splash Macadâmia: floral feminino marcado pela cremosidade",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-87516",
        "productIdView": "NATBRA-87516",
        "name": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba 400 ml",
        "friendlyName": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 51.4,
                "currency": "BRL",
                "formatted": "R$ 51,40",
                "decimalPrice": "51.40"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "corpo e banho",
        "images": {
            "medium": [
                {
                    "alt": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw41028290/NATBRA-87516_1.jpg",
                    "index": "0",
                    "title": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw41028290/NATBRA-87516_1.jpg"
                },
                {
                    "alt": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw169a9e5c/NATBRA-87516_2.jpg",
                    "index": "1",
                    "title": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Amora Vermelha e Jabuticaba 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw169a9e5c/NATBRA-87516_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 51.4
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Refil Hidratante Amora Vermelha e Jabuticaba: nutrição adaptativa para o seu corpo todos os dias",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-56417",
        "productIdView": "NATBRA-56417",
        "name": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
        "friendlyName": "Luna Absoluta 75 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 169.9,
                "currency": "BRL",
                "formatted": "R$ 169,90",
                "decimalPrice": "169.90"
            },
            "list": null
        },
        "rating": 4.9,
        "line": "null | 75 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc7d170f3/NATBRA-56417_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc7d170f3/NATBRA-56417_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dweb7cc7a6/NATBRA-56417_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dweb7cc7a6/NATBRA-56417_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6b270f5a/NATBRA-56417_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6b270f5a/NATBRA-56417_3.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw622cb716/NATBRA-56417_4.jpg",
                    "index": "3",
                    "title": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw622cb716/NATBRA-56417_4.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcea0a059/NATBRA-56417_5.jpg",
                    "index": "4",
                    "title": "Desodorante Colônia Luna Absoluta Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcea0a059/NATBRA-56417_5.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 33.98
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Descubra o desodorante Luna Absoluta",
        "brand": "Luna",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-2815",
        "productIdView": "NATBRA-2815",
        "name": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia 400 ml",
        "friendlyName": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 51.4,
                "currency": "BRL",
                "formatted": "R$ 51,40",
                "decimalPrice": "51.40"
            },
            "list": null
        },
        "rating": 3.4,
        "line": "null | 400 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "corpo e banho",
        "images": {
            "medium": [
                {
                    "alt": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6198511d/NATBRA-2815_1.jpg",
                    "index": "0",
                    "title": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6198511d/NATBRA-2815_1.jpg"
                },
                {
                    "alt": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia 400 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1964779e/NATBRA-2815_2.jpg",
                    "index": "1",
                    "title": "Refil Creme Desodorante Nutritivo Corporal Tododia Macadâmia 400 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1964779e/NATBRA-2815_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 51.4
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Pele mais firme e ultramacia todos os dias",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-72221",
        "productIdView": "NATBRA-72221",
        "name": "Body Splash Desodorante Colônia Tododia Algodão Feminino 200 ml",
        "friendlyName": "Body Splash Tododia Algodão 200 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 77.9,
                "currency": "BRL",
                "formatted": "R$ 77,90",
                "decimalPrice": "77.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 200 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "body splash",
        "images": {
            "medium": [
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Algodão Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1cb7bff2/Produtos/PRODUTO/NATBRA-72221_1.jpg",
                    "index": "0",
                    "title": "Body Splash Desodorante Colônia Tododia Algodão Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1cb7bff2/Produtos/PRODUTO/NATBRA-72221_1.jpg"
                },
                {
                    "alt": "Body Splash Desodorante Colônia Tododia Algodão Feminino 200 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw24852f9c/Produtos/PRODUTO/NATBRA-72221_2.jpg",
                    "index": "1",
                    "title": "Body Splash Desodorante Colônia Tododia Algodão Feminino 200 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw24852f9c/Produtos/PRODUTO/NATBRA-72221_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 2,
            "minInstallmentsValue": 38.95
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Conheça o body splash algodão Natura",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-86728",
        "productIdView": "NATBRA-86728",
        "name": "Desodorante Colônia Paz e Humor Masculino 75 ml",
        "friendlyName": "Paz e Humor Masculino 75 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 143.9,
                "currency": "BRL",
                "formatted": "R$ 143,90",
                "decimalPrice": "143.90"
            },
            "list": null
        },
        "rating": 3.7,
        "line": "null | 75 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Paz e Humor Masculino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6d8bd901/NATBRA-86728_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Paz e Humor Masculino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6d8bd901/NATBRA-86728_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Paz e Humor Masculino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf61215c1/NATBRA-86728_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Paz e Humor Masculino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf61215c1/NATBRA-86728_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 4,
            "minInstallmentsValue": 35.98
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Paz e Humor Natura: Uma Mistura Irreverente de Energia, Vibração e Irresistível Poder",
        "brand": "Humor",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-2179",
        "productIdView": "NATBRA-2179",
        "name": "Desodorante Antitranspirante em Creme Erva Doce 80g",
        "friendlyName": "Desodorante Antitranspirante em Creme Erva Doce",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 29.1,
                "currency": "BRL",
                "formatted": "R$ 29,10",
                "decimalPrice": "29.10"
            },
            "list": null
        },
        "rating": 3.7,
        "line": "null | 80 g",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "creme",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Antitranspirante em Creme Erva Doce 80g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw616a1215/NATBRA-2179_1.jpg",
                    "index": "0",
                    "title": "Desodorante Antitranspirante em Creme Erva Doce 80g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw616a1215/NATBRA-2179_1.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante em Creme Erva Doce 80g",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw79121bca/NATBRA-2179_2.jpg",
                    "index": "1",
                    "title": "Desodorante Antitranspirante em Creme Erva Doce 80g",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw79121bca/NATBRA-2179_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 29.1
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Desodorante Erva Doce Natura: absorve e protege rapidamente!",
        "brand": "Erva Doce",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-123128",
        "productIdView": "NATBRA-123128",
        "name": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
        "friendlyName": "Desodorante Antitranspirante Roll-on Tododia Sem Perfume",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 27.9,
                "currency": "BRL",
                "formatted": "R$ 27,90",
                "decimalPrice": "27.90"
            },
            "list": null
        },
        "rating": 4.1,
        "line": "null | 70 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "roll-on",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw78f9be49/NATBRA-123128_1.jpg",
                    "index": "0",
                    "title": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw78f9be49/NATBRA-123128_1.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe2d63133/NATBRA-123128_2.jpg",
                    "index": "1",
                    "title": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe2d63133/NATBRA-123128_2.jpg"
                },
                {
                    "alt": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc2763a48/NATBRA-123128_3.jpg",
                    "index": "2",
                    "title": "Desodorante Antitranspirante Roll on Tododia Sem Perfume 70 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc2763a48/NATBRA-123128_3.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 1,
            "minInstallmentsValue": 27.9
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Desodorante Neutro Tododia: a Proteção e Cuidado que sua Pele Merece",
        "brand": "Tododia",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-44452",
        "productIdView": "NATBRA-44452",
        "name": "Desodorante Colônia Luna Feminino 75 ml",
        "friendlyName": "Luna 75 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 169.9,
                "currency": "BRL",
                "formatted": "R$ 169,90",
                "decimalPrice": "169.90"
            },
            "list": null
        },
        "rating": 3.5,
        "line": "null | 75 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Colônia Luna Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfa71e703/NATBRA-44452_1.jpg",
                    "index": "0",
                    "title": "Desodorante Colônia Luna Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfa71e703/NATBRA-44452_1.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb7e198d6/NATBRA-44452_2.jpg",
                    "index": "1",
                    "title": "Desodorante Colônia Luna Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb7e198d6/NATBRA-44452_2.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw94d0b416/NATBRA-44452_3.jpg",
                    "index": "2",
                    "title": "Desodorante Colônia Luna Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw94d0b416/NATBRA-44452_3.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwca123f10/NATBRA-44452_4.jpg",
                    "index": "3",
                    "title": "Desodorante Colônia Luna Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwca123f10/NATBRA-44452_4.jpg"
                },
                {
                    "alt": "Desodorante Colônia Luna Feminino 75 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1ebc8b66/NATBRA-44452_5.jpg",
                    "index": "4",
                    "title": "Desodorante Colônia Luna Feminino 75 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1ebc8b66/NATBRA-44452_5.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 5,
            "minInstallmentsValue": 33.98
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Luna Desodorante Colônia da Natura para momentos especiais do dia a dia",
        "brand": "Luna",
        "isAvailableInAllDCs": false
    },
    {
        "productId": "NATBRA-99159",
        "productIdView": "NATBRA-99159",
        "name": "Desodorante Perfume Natura Homem Tato 100 ml",
        "friendlyName": "Natura Homem Tato 100 ml",
        "currency": "BRL",
        "price": {
            "discountPercent": 0,
            "sales": {
                "value": 204.9,
                "currency": "BRL",
                "formatted": "R$ 204,90",
                "decimalPrice": "204.90"
            },
            "list": null
        },
        "rating": 5,
        "line": "null | 100 ml",
        "tags": [
            {
                "tagName": "progressivo",
                "color": "#1c4587"
            }
        ],
        "categoryName": "perfumaria",
        "images": {
            "medium": [
                {
                    "alt": "Desodorante Perfume Natura Homem Tato 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc5288075/NATBRA-99159_1.jpg",
                    "index": "0",
                    "title": "Desodorante Perfume Natura Homem Tato 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc5288075/NATBRA-99159_1.jpg"
                },
                {
                    "alt": "Desodorante Perfume Natura Homem Tato 100 ml",
                    "url": "/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe2b94a0a/NATBRA-99159_2.jpg",
                    "index": "1",
                    "title": "Desodorante Perfume Natura Homem Tato 100 ml",
                    "absURL": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwe2b94a0a/NATBRA-99159_2.jpg"
                }
            ]
        },
        "orderable": true,
        "inStock": true,
        "installments": {
            "maxInstallments": 6,
            "minInstallmentsValue": 34.15
        },
        "variations": [],
        "hasVariations": false,
        "shortDescription": "Natura Homem Tato: descubra a força de sentir-se bem na própria pele",
        "brand": "Natura Homem",
        "isAvailableInAllDCs": false
    }
];
let convert = () => {
    let newProducts = products.map(product => {
        return {
            id: randomUUID(),
            productIdView: product.productIdView,
            name: product.name,
            description: product.friendlyName,
            price: product.price.sales.value,
            stock: Math.floor(Math.random() * 30),
            images: product.images.medium,
            brand: product.brand,
            category: {
                connect: {
                    id: 'f1e2d3c4-b5a6-7980-1a2b-3c4d5e6f7a8b'
                }
            }
        };
    });
    let data = JSON.stringify(newProducts, null, 2);
    fs.writeFile('./prisma/newProducts.json', data, (err) => {
        if (err)
            throw err;
        console.log('Arquivo salvo com sucesso!');
    });
};
convert();
//# sourceMappingURL=externalProducts.js.map