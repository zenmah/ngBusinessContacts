import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-business',
  templateUrl: './show-business.component.html',
  styleUrls: ['./show-business.component.css']
})
export class ShowBusinessComponent implements OnInit {
  @Input() business;
  @Output() hide: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.hide.emit(null);
  }

}
