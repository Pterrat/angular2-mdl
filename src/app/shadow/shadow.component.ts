import { Component, ViewEncapsulation } from '@angular/core';
import { flyInOutTrigger } from './../animations/flyInOutTrigger-animation';
import { hostConfig } from './../animations/flyInOutTrigger-animation';

@Component({
  moduleId: module.id,
  selector: 'shadow-demo',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
  templateUrl: 'shadow.component.html',
  styles: [`
    .shadow-example {
      height: 70px;
      width: 100px;
      margin:20px;
      float: left;
    }
    .clearfix {
        clear: both;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ShadowDemo {

}
