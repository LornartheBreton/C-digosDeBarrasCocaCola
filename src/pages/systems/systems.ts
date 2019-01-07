import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpecsPage } from '../specs/specs';
import { DataProvider } from '../../providers/data/data';
import { isRightSide } from 'ionic-angular/umd/util/util';
import { HomePage } from '../home/home'
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { Storage } from "@ionic/storage";
/*
  Éste archivo define el comportamiento de la página "systems": la primera que
  aparece al iniciar la aplicación y de la que desembocan las demás páginas.
 */

@IonicPage()
@Component({
  selector: 'page-systems',
  templateUrl: 'systems.html',
})
export class SystemsPage {
  system=0;
  home=HomePage;
  specs=SpecsPage;
  items = []; //Éste es el arreglo que contiene todos los equipos de cómputo.
  temp={
    CPU:"",
    RAM:"",
    PN:"",
    SN:"",
    URL:"",
    DEP: "",
    MAR: ""
  };//Éste es el diccionario cuya estructura comparten todos los elementos del arreglo items.
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: DataProvider, public tasksService: TasksServiceProvider,
    public storage: Storage) {
    //console.log(this.navParams.get('computadora').CPU);
    /*this.temp.CPU=this.navParams.get('CPU');
    this.temp.RAM=this.navParams.get('RAM');
    this.temp.PN=this.navParams.get('PN');
    this.temp.SN=this.navParams.get('SN');
    this.temp.URL=this.navParams.get('URL');
    this.temp.DEP=this.navParams.get('DEP');
    this.temp.MAR=this.navParams.get('MAR');
    this.items.push(this.temp);
    this.dataService.save(this.items);
    this.tasksService.create(this.temp)
      .then(response=>{
        this.items.unshift(this.temp);
    })
    .catch (error => {
      console.error(error);
    });
    this.getAllSystems();*/
    
    
    this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'systems')) {
          this.storage.get('systems')
            .then(systems => {
              this.items = JSON.parse(systems);
            });
        }else{
          this.storage.set('systems', JSON.stringify(this.items));
        }
      });/*Al entrar en la aplicación se verifica si es la primera ves que se inicia. 
      En el caso que no, se crea el archivo JSON en dónde se guardaran todos los elementos
      de "items".*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemsPage');
  }
  seeSpecs(thing: any){
    this.navCtrl.push(this.specs, thing) //Pasa a una página para ver las especificaciones del equipo.
  }

  addSystem(){
    this.navCtrl.push(this.home, {items: this.items});//Para ala pagina de "homa" para agregar un equipo.
  }

  /*getAllSystems(){
    this.tasksService.getAll()
    .then(systems=>{
      this.items=systems;
    }).catch (error => {
      console.error(error);
    });
  }*/

}
