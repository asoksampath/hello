import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api valueFromParent = 'Child Value';

    @api showValueFromParent(showValue){
        // eslint-disable-next-line no-alert
        window.alert(showValue);
    }
}