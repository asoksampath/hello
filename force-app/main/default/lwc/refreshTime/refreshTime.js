import { LightningElement } from 'lwc';

export default class RefreshTime extends LightningElement {
    handleRefresh(event){
        this.template.querySelector('c-refresh-Time-Child').refresh();
    }
}