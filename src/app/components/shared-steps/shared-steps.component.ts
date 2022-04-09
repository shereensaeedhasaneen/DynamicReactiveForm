import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shared-steps',
  templateUrl: './shared-steps.component.html',
  styleUrls: ['./shared-steps.component.scss']
})
export class SharedStepsComponent implements OnInit {

  @Input() dynamicFormArray:any;
  @Input() public registerationForm !:FormGroup ; // for initialize
  @Output() Next :EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  next(){

    this.Next.emit(1);

  }
}
