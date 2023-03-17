import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalService} from "../../services/global.service";
import {Art} from "../../models/art";
import {environment} from "../../../environments/environment";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  arts: Art[] = [];
  selectedArt: Art;
  imageSource = environment.imageSource;

  constructor(private modalService: NgbModal,private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.getImages().subscribe((res) => {
      console.log(res);
      this.arts = res;
    });
  }

  open(content: any, size = 'md') {
    this.modalService.dismissAll();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',centered: true,size: size });
  }

  openImage(art: Art){
    console.log(art);
    this.selectedArt = art;
  }
}
