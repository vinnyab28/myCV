import { Component, OnInit } from '@angular/core';

interface Interest {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  public interests: Interest[] = [
    { name: 'Basketball', icon:'sports_basketball' },
    { name: 'Guitar', icon:'music_note' },
    { name: 'Making Lyric Videos', icon:'music_video' },
    { name: 'Singing', icon:'mic' },
    { name: 'Cooking', icon:'room_service' },
    { name: 'Poster Designing', icon:'brush' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
