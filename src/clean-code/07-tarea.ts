(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio' | 'txtName';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }



    interface InputProperties
    {
        id          : string,
        placeholder : string,
        type        : HtmlType,
        value       : string,
    }


    class InputElement {
        public html     : HtmlElement;
        public attributes : InputAttributes
        public events     : InputEvents;
        constructor({
            id,type,
            value,placeholder
        }: InputProperties){
            this.html       = new HtmlElement(id,type);
            this.attributes = new InputAttributes(value,placeholder);
            this.events     = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({id:'Fernando', placeholder:'Enter first name', type:'txtName', value:'Hi'});

    console.log({ nameField });

})()