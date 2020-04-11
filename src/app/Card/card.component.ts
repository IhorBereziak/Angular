import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  title = 'My card title';
  text = 'My text';
  cardDate: Date =  new Date();

  textColor: string;

  ngOnInit() {
  }

  ChangeTitle() {
    this.card.title = 'Title has been changed!';
  }
  inputHandler(value) {
    // const value = event.target.value;
    this.title = value;
  }
  changeHandler() {
    console.log(this.title);
  }
}
