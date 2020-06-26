export default class reactive {
    constructor (value, condition){ // condition -> the condition that when met to ignite the subscribers
        this.value = value;
        this.condition = condition;
        this.subscribers = [];
    }

    addSubscriber(subscriber){
        this.subscribers.push(subscriber);
    }

    // set value(val){
    //     this.value = val;
    // }
    
    // get value(){
    //     return this.value;
    // }

    // set value(value){
    //     this.value = value;
    //     if (this.value === this.condition){
    //         this.subscribers.forEach((subscriber) => {
    //             subscriber();
    //         });
    //     }
    // }
}