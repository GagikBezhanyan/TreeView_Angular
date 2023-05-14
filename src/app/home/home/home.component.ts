import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IData } from 'src/models/model';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('tree') tree!: ElementRef;
  public data: IData[] = [];

  constructor(private request: RequestService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.request.getData<IData[]>().subscribe((res: IData[]) => {
      const div = this.renderer.createElement('div');
      console.log(div);
      
      const treeView = this.createTree(res, div);
      this.tree.nativeElement.appendChild(treeView);
      console.log(res);
    })
  }

  createTree(data: any, elm: HTMLElement) {
    const ul = this.renderer.createElement('ul');
    elm.appendChild(ul);

    for (let i in data) {  
      const li = this.renderer.createElement('li');
      const span = this.renderer.createElement('span');
      span.innerText = data[i].name 
                        ? data[i].name 
                        : data[i].mark 
                          ? data[i].mark 
                          : data[i].model 
                            ? data[i].model 
                            : data[i].class 
                              ? data[i].class 
                              : data[i].type 
                                ? data[i].type 
                                : data[i].region 
                                  ? data[i].region 
                                  : data[i].category;
      li.appendChild(span);
      ul.appendChild(li);

      for (let key in data[i]) {
        if (Array.isArray(data[i][key])) {
          this.createTree(data[i][key], li)
        }
      } 
    }

    return elm;
  }

}
