import { Component, OnInit } from '@angular/core';

import { Book, Thumbnail } from '../shared/book'

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  books:Book[]
  
  constructor() { }

  ngOnInit() {
    this.books = [
      new Book(
        '9783864903571',
        'Angular',
        ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
        new Date(2017,3,1),
        'Grundlagen, fortgeschrittene Techniken und best Practices mit Typescript',
        5,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
        'Mit Angular setzen Sie...'
      ),
      new Book(
        '9783864901546',
        'AngularJS',
        ['Phillip Tarasiewicz', 'Robin Böhm'],
        new Date(2014,5,29),
        'Eine praktische Einführung',
        5,
        [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')],
        'Dieses Buch führt Sie...'
      )
      ]
  }

}
