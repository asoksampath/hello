import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track helloWorld = " HTML!";
    @track helloWorldLWC  = " LWC!";

    handleChange(event){
        this.helloWorld = event.target.value;
    }

    handleChangeLWC(event){
        this.helloWorldLWC = event.target.value;
    }
}