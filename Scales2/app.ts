class Scales {

    products:Iscalable[];

    constructor() {
        this.products=[]; 
    }

    add(_prod:Iscalable):void {
        this.products.push(_prod);
    }

    getSumScale():number{
        let sc:number = 0;
        this.products.forEach((prod:Iscalable)=>{
            sc+=prod.getScale();
        })
        return sc
    }
    getNameList():string[]{
        let names:string[]=[];
        this.products.forEach( (prod:Iscalable) => {
            names.push(prod.getName());
          });
        return names
    } 
}

interface Iscalable{
    getName():string;
    getScale():number;
} 
class Apple implements Iscalable{
    name: string;
  scale: number;
    constructor(_name: string, _scale: number){
        this.name=_name;
        this.scale=_scale;}

    getName():string{
                  return this.name;
    }

    getScale():number {
        return this.scale;
      } 
 }
class Tomato  implements Iscalable{
    name: string;
  scale: number;
    constructor(_name: string, _scale: number){
        this.name=_name;
        this.scale=_scale;}
        
    getName():string{
        
        return this.name;
    }
    getScale():number {
       
        return this.scale;
      }
}
const pr1: Iscalable= new Tomato("Черри", 450);
const pr2: Iscalable= new Tomato("Семейный", 1830);
const pr3: Iscalable= new Tomato("Сливка", 325);
const pr4: Iscalable= new Apple("Белый налив", 560);
const pr5: Iscalable= new Apple("Ранет", 800);
const pr6: Iscalable= new Apple("Розовый налив", 1000);
const scales: Scales = new Scales();
scales.add(pr1);
scales.add(pr2);
scales.add(pr3);
scales.add(pr4);
scales.add(pr5);
scales.add(pr6);

console.log("Cуммарный вес продуктов = "+ scales.getSumScale()+" гр.");
console.log("Список добавленных продуктов: "+ scales.getNameList().join('; '));
