import { Category } from '../../services/category';
import { FirebaseService } from '../../services/firebase.service';
import { Business } from '../../services/business';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {
  @Input() newBusiness: Business;
  submitted: boolean;
  @Input() categories: Category[];
  @Output() newBusinessRequest: EventEmitter < any > = new EventEmitter();

  constructor(private fbService: FirebaseService) {
    this.submitted = false;
    this.newBusiness = {category: null } as  Business;
  }
  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.newBusiness.created_at = new Date().toString();
    this.newBusinessRequest.emit(this.newBusiness);
  }
}
