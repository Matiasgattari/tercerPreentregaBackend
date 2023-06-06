import {
    randomUUID
} from 'crypto'


//constructor para creacion de productos nuevos
export class Product {
    #title
    #description
    #price
    #thumbnail
    #code
    #stock
    #category
    #id
    #status
   
    constructor(
        {title,
        description,
        price,
        thumbnail,
        code,
        stock,
        category}
    ) {
        this.#title = title;
        this.#description = description;
        this.#price = price;
        this.#thumbnail = thumbnail;
        this.#code = code;
        this.#stock = stock;
        this.#category = category;
        this.#id = randomUUID();
        this.#status = true;
    }

    async dto() {
        return await {
            title:this.#title,
            description:this.#description,
            price:this.#price,
            thumbnail:this.#thumbnail,
            code:this.#code,
            stock:this.#stock,
            category:this.#category,
            id:this.#id,
            status:this.#status
        }
      }
}
