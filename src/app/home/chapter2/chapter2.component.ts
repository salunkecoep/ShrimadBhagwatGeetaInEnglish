import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss'],
})
export class Chapter2Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}
}
