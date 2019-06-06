interface IStorageEngine{
    addItem(item: Product): void;
    getItem(index: number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine>{
    storage:StorageEngine;

    constructor(_storage:StorageEngine) {
        this.storage=_storage; 
    }

    addItem(item:Product):void {
        this.storage.addItem(item);
    }

    getSumScale():number{
        let sc:number = 0;
        const items = this.storage.getCount();
    
    for(let i = 0; i < items; i++) {
      sc += this.storage.getItem(i).getScale()
    }
    return sc;
       
    }
    getNameList():string[]{
        let names:Array<string>=[];
        const items = this.storage.getCount();
        for(let i = 0; i < items; i++) {
            names.push( this.storage.getItem(i).getName() );
          }
          return names;
    } 
}
class ScalesStorageEngineArray implements IStorageEngine {
    private products: Array<Product> = [];
  
    addItem(item: Product): void {
      this.products.push(item);
    }
  
    getItem(index: number): Product {
      return this.products[index];
    }
  
    getCount(): number {
      return this.products.length;
    }
  }
class ScalesStorageEngineLocalStorage implements IStorageEngine{
    addItem(item: Product): void{
        if (localStorage.length == 0) {
            localStorage.setItem( 'Scales', JSON.stringify([]) );
      }
      let products: Array<Product> = JSON.parse(localStorage.Scales);
      products.push(item);
      localStorage.Scales = JSON.stringify(products);}
    
      getItem(index: number): Product {
        const products: Array<Product> = JSON.parse(localStorage.Scales);
        const item: any = products[index];
        return new Product(item.name, item.scale);
      }
    
      getCount(): number {
        const products: Array<Product> = JSON.parse(localStorage.Scales);
        return products.length;
      } 
}
class Product{
    private  name:string;
    private scale:number;

    constructor(_name: string, _scale: number){
        this.name=_name;
        this.scale=_scale;
    }
   public getName():string {
        return this.name;
      }
    
    public getScale():number {
        return this.scale;
      }
}

const pr1: Product= new Product("Картошка", 450);
const pr2: Product= new Product("Помидор", 1830);
const pr3: Product= new Product("Огурец", 325);
const pr4: Product= new Product("Морковь", 560);
const pr5: Product= new Product("Яблоко", 800);
const pr6: Product= new Product("Груша", 1000);

const storage_Array = new ScalesStorageEngineArray();
const strage_localStorage = new ScalesStorageEngineLocalStorage();

const scales_Array = new Scales<ScalesStorageEngineArray>(storage_Array);
scales_Array.addItem(pr1);
scales_Array.addItem(pr2);
scales_Array.addItem(pr3);
console.log("Список добавленных продуктов в ScalesStorageEngineArray: " + scales_Array.getNameList().join('; '));
console.log("Суммарный вес продуктов = " + scales_Array.getSumScale() + "гр.");

const scales_localStorage = new Scales<ScalesStorageEngineLocalStorage>(strage_localStorage);
scales_localStorage.addItem(pr4);
scales_localStorage.addItem(pr5);
scales_localStorage.addItem(pr6);


console.log("Список добавленных продуктов в ScalesStorageEngineLocalStorage: " + scales_localStorage.getNameList().join('; '));
console.log("Суммарный вес продуктов = " + scales_localStorage.getSumScale() + "гр.");
