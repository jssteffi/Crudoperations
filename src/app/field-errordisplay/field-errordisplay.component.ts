import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-errordisplay',
  templateUrl: './field-errordisplay.component.html',
  styleUrls: ['./field-errordisplay.component.css']
})
export class FieldErrordisplayComponent {

    @Input() errorMsg: string;
    @Input() displayError: boolean;

}
