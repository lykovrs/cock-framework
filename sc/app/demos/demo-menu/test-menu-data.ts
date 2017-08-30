import {IScMenu} from 'ui-kit/sc-menu/sc-menu-item/sc-menu-item.interface';
// Для отладки и демонстрации
export const testMenuData: Array<IScMenu> = [
  {
    name: "Пункт меню",
    isAvailable: true,
    url: "#",
    teaser: {
      text: 'Lorem ipsum dolor sit amet'
    },
    menuItems: [{
      name: "Пункт меню второго уровня",
      isAvailable: true,
      url: "#",
      disabled: true,
      menuItems: [{
        name: "Пункт меню третьего уровня",
        isAvailable: true,
        url: "#",
        action: function () {
          alert("click " + this.name);
        }
      }, {
        name: "Пункт меню третьего уровня",
        isAvailable: true,
        url: "#"
      }, {
        name: "Пункт меню третьего уровня",
        isAvailable: true,
        url: "#"
      }]
    }, {
      name: "Пункт меню второго уровня",
      isAvailable: true,
      url: "#",
      teaser: {
        text: 'ipusm'
      },
      menuItems: [{
        name: "Пункт меню третьего уровня",
        isAvailable: true,
        url: "#",
        teaser: {
          num: 8,
          text: 'Consectetur adipisicing elit.'
        },
        action: function () {
          alert("click " + this.name);
        }
      }, {
        name: "Пункт меню третьего",
        isAvailable: true,
        teaser: {
          num: 3,
          text: 'Consectetur adipisicing elit.'
        },
        url: "#"
      }, {
        name: "Пункт меню третьего уровня",
        isAvailable: true,
        url: "#"
      }]
    }]
  },
  {
    name: "Parent2 width action",
    isAvailable: true,
    url: "#",
    action: function () {
      alert('click!');
    },
    menuItems: [{
      name: "Child1",
      isAvailable: true,
      url: "#",
      menuItems: [{
        name: "Grandchild1 width action",
        isAvailable: true,
        url: "#",
        action: function () {
          alert("click " + this.name);
        }
      }, {
        name: "Grandchild2",
        isAvailable: true,
        url: "#"
      }, {
        name: "Grandchild3",
        isAvailable: true,
        url: "#"
      }]
    }]
  },
  {
    name: "Parent3 width disabled",
    isAvailable: true,
    url: "#",
    disabled: true
  }
];
