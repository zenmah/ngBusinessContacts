import { Category } from '../../services/category';
import { Business } from '../../services/business';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent implements OnInit {
  @Input() businesses: Business[];
  @Input() categories: Category[];
  @Output() showDetail: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(businessKey:string) {
    this.showDetail.emit(businessKey);
  }
  onShowEdit(businessKey: string) {
    this.edit.emit(businessKey);
  }
  onDelete(businessKey: string) {
    this.delete.emit(businessKey);
  }

}
