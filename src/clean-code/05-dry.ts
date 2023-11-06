
type Size = '' | 'S' | 'M';

class Product {
    constructor(
        public name: string = '',
        public size: Size = '',
        public price: number = 0,
    ){}


    isProductReady():boolean{
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if(( (<string>this[key]).length <= 0))throw Error (`${key} is empty`);
                break;
                case 'number':
                    if(( (<number>this[key]) <= 0))throw Error (`${key} is 0`);
                break;
                default:
                    throw Error(`${ typeof this[key] } is not supported`);
            }
        }

        return true;
    }


    toString(){
        
        //Estamos duplicando las validaciones cada vez que se agrega una propiedad

        //if(this.name.length<= 0) throw Error ('name is empty');
        //if(this.price <= 0) throw Error ('price is empty');
        //if(this.size.length<= 0) throw Error ('size is empty'); 

        //El codigo se puede hacer mas grande ya que tocaria agregar un array por cada tipo
        //a su vez toca agregar un elemento cada vez que se agregue una propiedad 

        /*
        const stringProperties = ['name','size'];


        for(const key in this){
            
            if((stringProperties.includes(key) && (<string>this[key]).length <= 0)) 
            {
                throw Error (`${key} is empty`);
            }
        }*/

        if(!this.isProductReady) return;

        

        return `${this.name} (${this.price}), ${this.size}`

    }
}


(() => {

    const bluePants = new Product('Blue pants','M',10);
    console.log(bluePants.toString());
})();