import { LightningElement } from 'lwc';

export default class Childlife extends LightningElement {
    connectedCallback(){
        throw new Error('Error callback is called successfully !!');
    }
}