export interface Product {
    id: number,
    title : string,
    price: string,
    description : string,
    category : string,
    image : string,
    rating : Rate
}


interface Rate {
    rate : string,
    count : number
}