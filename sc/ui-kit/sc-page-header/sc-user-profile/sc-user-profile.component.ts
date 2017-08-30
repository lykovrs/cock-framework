import {Component, Input, OnInit} from "@angular/core";
// import {Router} from "@angular/router";

import {IScProfile} from "../sc-page-header/sc-page-header.interface";


@Component({
    selector: "sc-user-profile",
    templateUrl: './sc-user-profile.component.html',
    styleUrls: ['./sc-user-profile.component.scss']
})

/*
*
* */

/**
 * Компонент профиля пользователя
 * @class ScUserProfileComponent
 */
export class ScUserProfileComponent implements OnInit{

    @Input() user: IScProfile  = null;

    public constructor(/*protected router: Router,
                       private userContext: UserContextService*/) {}


    /**
     * При инициализвации проверяем готовность контекста пользователя. Если не готов - подписываемся на событие готовности
     */
    ngOnInit() {
        /*this.userContext.isReady() ? this.initUser() :
            this.userContext.watch(UserContextNotifierEvents.LOADED, () => {
                this.initUser();
                return true;
            })*/
    }

    // инициализируем объект пользователя в компоненте
    private initUser(){
     /* this.userContext.getUserContext().then((user: User) => {
       this.user = user;
       });*/
    }

    public onClickChangeProfile() {
      // this.userContext.changeContext('changeProfile');
    }

    // По кнопке изменения профиля инициируем изменение контекста пользователя
    public onClickChangeOtherMedicalEmployee() {
      /*this.userContext.modalOpen().then((selectedME) => {
        if (selectedME) {
          this.userContext.setOtherMedicalEmployee(selectedME);
        }
      });*/
    }

    public getOtherMedicalEmployeeName(): string {
      /*if (this.userContext.getOtherMedicalEmployee()) {
        return this.userContext.getOtherMedicalEmployee().itemName;
      } else {
        return 'Не выбран';
      }*/
      return 'Не выбран';
    }


    /*Метод выхода их системы (инициируем изменение контекста пользователя)
    @method logout*/

    public logout() {
      alert('logout');
      // this.userContext.changeContext('logout');
    }
}

