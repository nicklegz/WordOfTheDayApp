import { Component, OnInit } from '@angular/core';
import { WORDS } from './mock-words';
import { Word } from './word'

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words = WORDS;

  constructor() { }

  ngOnInit():  void{
  }
}
