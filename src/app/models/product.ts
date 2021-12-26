export class Product {
    id?: number;
    name: string;
    picture: string;
    price: number;
    description: string;
    subtitle: string;

    constructor(

        price: number = 0,

        name: string = '',
        picture: string = '',
        description: string = '',
        subtitle: string = '',
    ) {

        this.price = price,

            this.name = name,
            this.picture = picture,
            this.description = description,
            this.subtitle = subtitle;
    }

}
