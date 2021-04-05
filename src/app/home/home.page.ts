import { Component } from '@angular/core';
import {DeviceMotion , DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  acceleration: [number, number ,number];

  constructor( private deviceMotion: DeviceMotion) {

    this.deviceMotion.getCurrentAcceleration()
     .then((acc: DeviceMotionAccelerationData)=>{
       console.log("ACC:" , acc.x, acc.y ,acc.z);

     },
     (error:any)=>console.log("ACC", error)

     )
     let accWatch = this.deviceMotion.watchAcceleration();
     accWatch.subscribe((acc:DeviceMotionAccelerationData)=>{
      console.log("ACC:" , acc.x, acc.y ,acc.z);
      this.acceleration =[acc.x,acc.y,acc.z]
     },
     (error:any)=>console.log("ACC", error)
     )
  }

}
