import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  @Input() text!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() progress!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
