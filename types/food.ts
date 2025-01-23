

  




export interface Food{
    _id:string;
    name:string;
    _type:"food";
    image?:{
        asset:{
            _ref:string;
            _type:"image";

        }
    };
    price:number;
    description:string;
    slug:{
        _type:'slug'
        current:string;
    };

}