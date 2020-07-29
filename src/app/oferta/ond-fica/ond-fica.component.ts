import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-ond-fica',
  templateUrl: './ond-fica.component.html',
  styleUrls: ['./ond-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndFicaComponent implements OnInit {

  public ondeFica: string = ""

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao
      })
  }

}
