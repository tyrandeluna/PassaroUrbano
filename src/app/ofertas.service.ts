import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import { URL_API } from './app.api'
import { Observable, throwError } from 'rxjs'
import {map, catchError} from "rxjs/operators";

@Injectable()
export class OfertasService {

    //private url_api = "http://localhost:3000/ofertas"

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
        //retornar uma promise oferta[]
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift().descricao)
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((resposta: any)=> resposta),
                catchError((error: any)=> throwError("Algo deu errado!"))
            );
    }
}