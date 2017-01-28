import { Category } from '../../services/category';
import { Business } from '../../services/business';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {

  @Input() categories: Category;
  @Input() business: Business;
  @Output() save: EventEmitter<Business> = new EventEmitter<Business>();
  @Output() cancel:  EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    this.save.emit(this.business);
  }
  onCancel(){
    this.cancel.emit(null);

  }

}
