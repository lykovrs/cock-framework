import {IScMenu} from 'ui-kit/sc-menu/sc-menu-item/sc-menu-item.interface';
// Для отладки и демонстрации
export const testMenuData: Array<IScMenu> = [
  {
    name: "Пункт меню",
    isAvailable: true,
    url: "#",
    teaser: {
      type: 'mine-shaft',
      text: "text"
    },
    menuItems: [
      {
        name: "Пункт меню второго уровня1",
        isAvailable: true,
        url: "#",
        teaser: {
          num: 17,
          type: 'shakespeare'
        },
      },
      {
        name: "Пункт меню второго уровня2",
        isAvailable: true,
        url: "#"
      },
      {
      name: "Пункт меню второго уровня3",
      isAvailable: true,
      url: "#",
        teaser: {
          type: 'mine-shaft',
          text: "text"
        },
      menuItems: [{
        name: "Пункт меню третьего уровня1",
        url: "#",
        action: function () {
          alert("click " + this.name);
        }
      }, {
        name: "Пункт меню третьего уровня2",
        url: "#",
        teaser: {
          num: 3,
          type: 'mine-shaft',
          text: "text"
        },
      }, {
        name: "Пункт меню третьего уровня3",
        url: "#",
        teaser: {
          num: 30,
          type: 'mine-shaft',
          text: "text"
        },
      }, {
        name: "Пункт меню третьего уровня4",
        url: "#"
      }]
    },
    {
      name: "Пункт меню второго уровня4",
      isAvailable: true,
      url: "#"
    }]
  },
  {
    name: "Parent3 width disabled",
    isAvailable: true,
    url: "#",
    disabled: true
  }
];
