import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ecommerce-example';

  @ViewChild(FooterComponent)
  primarySampleComponent ?: FooterComponent;


  ngAfterViewInit(){
    console.log(this.primarySampleComponent)
  }

}
