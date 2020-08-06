import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title:String="𝓚𝓻𝓲𝓼𝓱𝓷𝓪 𝓕𝓪𝓫";
  ngOnInit(): void {
  }

}
