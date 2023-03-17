import {Component, Input} from '@angular/core';
import {Art} from "../../models/art";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent {
  @Input() art: Art;
  @Input() modal: any;
  imageSource = environment.imageSource;
}
