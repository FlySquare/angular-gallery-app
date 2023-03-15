import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private modalService: NgbModal,private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.getImages().subscribe((res: any) => {
      console.log(res)
    });
  }

  open(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  openPDF(){
    window.open('/assets/catalog.pdf', '_blank')
  }
}
