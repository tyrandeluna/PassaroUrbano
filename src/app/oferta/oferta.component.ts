import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    
    // this.route.params.subscribe((parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('Processamento concluido')
    // )

    // let tempo = interval(2000)

    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo)
    // })

    //observable (observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) =>{
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.next(3)
    })

    //observable (observador)
    meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
  }

}
