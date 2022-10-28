import { Component } from '@angular/core';
import { MetaMascaraFactory } from 'mmascara';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  async connect(){
    const instance = MetaMascaraFactory.newInstance((window as any).detectEthereumProvider());
    const result = await instance.connect();
    alert (`Connection result: ${result} \nAddress: ${instance.address?.substring(0,6)}...`);
  }
}
