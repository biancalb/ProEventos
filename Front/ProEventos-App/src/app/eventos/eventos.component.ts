import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public url: string = 'https://localhost:44366/api/eventos';
  public eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get(this.url).subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );



    // this.eventos = [
    //   {
    //     Tema: 'Evento A',
    //     Local: ''
    //   },
    //   {
    //     Tema: 'Evento B',
    //     Local: ''
    //   },
    //   {
    //     Tema: 'Evento C',
    //     Local: ''
    //   },
    // ]
  }
}
