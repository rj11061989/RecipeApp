import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class headerComponent{
@Output() featurSelected = new EventEmitter<string>();

onSelect(feature:string){
this.featurSelected.emit(feature)
}
}