const cartoperations={
    create(object){
        object.price=object.price*object.qty;
        const data=require('../db/data');
        data.cartArr.push(object);
        console.log(data.cartArr);
        return "item added";
    }, 
    read(){
        const data=require('../db/data');
        console.log(data.cartArr);
    },
    update(object){
        const data=require('../db/data');
        object.price=object.price*object.qty;
        data.cartArr=data.cartArr.filter(obj=>obj.item!=object.item);
        data.cartArr.push(object);
        return "cart updated";
    },
    delete(object){
        const data=require('../db/data');
        if(data.cartArr.find(obj=>obj.item==object.item)){
            data.cartArr.pop(object);
            return "record deleted";
        }
        else{
            return "invalid entry";
        }
    }
}

module.exports=cartoperations;