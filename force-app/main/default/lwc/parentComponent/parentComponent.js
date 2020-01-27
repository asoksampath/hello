import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track valueToChild = 'Hi from Parent';   

    handleChange(event){
        var childCompVar = this.template.querySelector('c-child-component');
        childCompVar.valueFromParent = event.detail.value;
        this.valueToChild = childCompVar.valueFromParent;
    }

    handleClick(){
        var childCompVar = this.template.querySelector('c-child-component');
        childCompVar.showValueFromParent(this.valueToChild);
    }
}