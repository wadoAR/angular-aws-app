import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit {
  @Input() moduleName: string;
  @Input() buttonLabel: string;
  @Input() displayButton = true;
  @Output() addEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addEvent.emit();
  }
}
