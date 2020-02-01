/* eslint-disable no-alert */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
import { LightningElement,api } from 'lwc';

//To import the different html templates
import firstTemplate from './lifecyclehooks.html';
import secondTemplate from './lifecyclehook1.html';

export default class Lifecyclehooks extends LightningElement {
    @api templateNo = "temp1";
    constructor(){
        super();
        console.log("Inside constructor");
    }

    connectedCallback(){
        console.log("Inside ConnectedCallback");
    }

    disconnectedCallback(){
        console.log("Inside Disconnected callback");
    }

    changeTemplate(){
        console.log("Inside changeTemplate method");
        if(this.templateNo === "temp1")
            this.templateNo = "temp2";
        else
            this.templateNo = "temp1";
    }
    render(){
        console.log("Inside render");
        if(this.templateNo === "temp1")
            return firstTemplate;
        else
            return secondTemplate;
    }
    renderedCallback(){
        console.log("inside renderedcallback");
    }

    errorCallback(error,stack){
        console.log('inside error callback : ' + error);
        alert('error==>'+error);
    }

}