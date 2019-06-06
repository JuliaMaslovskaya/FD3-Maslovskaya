class Scales {

    products:Product[];

    constructor() {
        this.products=[]; 
    }

    add(_prod:Product):void {
        this.products.push(_prod);
    }

    getSumScale():number{
        let sc:number = 0;
        this.products.forEach((prod:Product)=>{
            sc+=prod.getScale();
        })
        return sc
    }
    getNameList():string[]{
        let names:string[]=[];
        this.products.forEach( (prod:Product) => {
            names.push(prod.getName());
          });
        return names
    } 
}
class Product{
    name:string;
    scale:number;

    constructor(_name: string, _scale: number){
        this.name=_name;
        this.scale=_scale;
    }
    getName():string {
        return this.name;
      }
    
      getScale():number {
        return this.scale;
      }
}
class Apple extends Product{
    getName():string{
        super.getName();
        return this.name;
    }

    getScale():number {
        super.getScale();
        return this.scale;
      } 
 }
class Tomato extends Product{
    getName():string{
        super.getName();
        return this.name;
    }
    getScale():number {
        super.getScale();
        return this.scale;
      }
}
const pr1: Product= new Tomato("Черри", 450);
const pr2: Product= new Tomato("Семейный", 1830);
const pr3: Product= new Tomato("Сливка", 325);
const pr4: Product= new Apple("Белый налив", 560);
const pr5: Product= new Apple("Ранет", 800);
const pr6: Product= new Apple("Розовый налив", 1000);
const scales: Scales = new Scales();
scales.add(pr1);
scales.add(pr2);
scales.add(pr3);
scales.add(pr4);
scales.add(pr5);
scales.add(pr6);

console.log("Cуммарный вес продуктов = "+ scales.getSumScale()+" гр.");
console.log("Список добавленных продуктов: "+ scales.getNameList().join('; '));
