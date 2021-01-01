import { Component, OnInit } from '@angular/core';
import { Word } from '../interfaces/word.model'
import {WordService} from '../services/word.service'
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words?: Word;

  constructor(private wordService: WordService, public messageService: MessageService) {
  }

  ngOnInit():  void{
    this.getWords();
  }

  getWords(): void{
    this.wordService.getWords().subscribe(words => this.words = words)
    };
  }

