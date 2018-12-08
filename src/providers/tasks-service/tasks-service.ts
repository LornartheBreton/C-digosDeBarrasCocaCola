import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {
  db: SQLiteObject = null;
  constructor(public http: HttpClient) {
    console.log('Hello TasksServiceProvider Provider');
  }

  setDatabase(db: SQLiteObject){
    if(this.db == null){
      this.db=db;
    }
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS systems(id INTEGER PRIMARY KEY AUTOINCREMENT, pn TEXT, cpu TEXT, ram TEXT, marca TEXT, departamento TEXT, sn TEXT, url TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM systems';
    return this.db.executeSql(sql,[])
    .then(response =>{
      let systems = [];
      for (let index = 0; index < response.rows.length; index++){
        systems.push(response.rows.item(index));
      }
      return Promise.resolve (systems);
    })
    .catch (error=> Promise.reject(error));
  }

  create(systems: any){
    let sql = 'INSERT INTO systems( pn, cpu, ram, marca, departamento, sn, url) VALUES (?,?,?,?,?,?,?)'; 
    return this.db.executeSql (sql, [systems.PN, systems.CPU, systems.MAR, systems.DEP, systems.SN, systems.URL]);
  }

  update (systems: any){
    let sql = 'UPDATE systems SET pn=?, cpu=?, ram=?, marca=?, departamento=?, sn=?, url=?';
    return this.db.executeSql (sql, [systems.PN, systems.CPU, systems.MAR, systems.DEP, systems.SN, systems.URL]);
  }

  /*delete (systems: any){
    let sql = 'DELETE FROM systems WHERE id=?';
    return this.db.executeSql
  }*/

}
