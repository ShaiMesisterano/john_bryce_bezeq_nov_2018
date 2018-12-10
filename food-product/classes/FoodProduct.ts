import ExpirationDate from '../classes/ExpirationDate';

export default class FoodProduct {
    private name: string;
    private price: number;
    private weight: number;
    private isKosher: boolean;
    private manufactor: string;
    private expirationDate: ExpirationDate;

    constructor(_name: string, _price: number, _weight: number, _isKosher: boolean, _manufactor: string, _expirationDate: Date) {
        this.name = _name;
        this.price = _price;
        this.weight = _weight;
        this.isKosher = _isKosher;
        this.manufactor = _manufactor;
        this.expirationDate = new ExpirationDate(_expirationDate);        
    }

    public getProduct(): string {
        return `name: ${this.name} 
        price: ${this.price} 
        weight: ${this.weight} 
        isKosher: ${this.isKosher} 
        manufactor: ${this.manufactor} 
        expirationDate: ${this.expirationDate.getExpirationDate()}`;
    } 

    public getPriceAndName(): string {
        return `price: ${this.price}
        name: ${this.name}`;
    }

    public getName(): string {
        return this.name;
    }

    public setPrice(price: number): string {
        if (price > 0) {
            this.price = price;
            return `Price was updated successfully`
        }
        else {
            return `Price must be greater than zero`;
        }
    }

    public moreExpensive(otherProduct: FoodProduct): FoodProduct {
        if (this.price > otherProduct.price) {
            return this;
        }
        else {
            return otherProduct;
        }
    }
}