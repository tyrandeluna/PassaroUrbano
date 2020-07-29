import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ond-fica',
  templateUrl: './ond-fica.component.html',
  styleUrls: ['./ond-fica.component.css']
})
export class OndFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.snapshot.params['id']
  }

}
