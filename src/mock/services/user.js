import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  console.log('options', options)
  const userInfo={
    "msg": "操作成功",
    "code": 0,
    "roles": [
    {
      "createTime": "2019-01-24 17:31:03",
      "deptPermType": "P",
      "id": 1,
      "params": {},
      "permList": [
        {
          "id": 32,
          "params": {},
          "permName": "menu:list",
          "resourceId": 35
        },
        {
          "id": 33,
          "params": {},
          "permName": "menu:add",
          "resourceId": 15
        },
        {
          "id": 34,
          "params": {},
          "permName": "menu:edit",
          "resourceId": 16
        },
        {
          "id": 35,
          "params": {},
          "permName": "menu:remove",
          "resourceId": 17
        },
        {
          "id": 38,
          "params": {},
          "permName": "role:list",
          "resourceId": 42
        },
        {
          "id": 39,
          "params": {},
          "permName": "role:add",
          "resourceId": 31
        },
        {
          "id": 40,
          "params": {},
          "permName": "role:edit",
          "resourceId": 32
        },
        {
          "id": 41,
          "params": {},
          "permName": "role:remove",
          "resourceId": 34
        },
        {
          "id": 43,
          "params": {},
          "permName": "dept:list",
          "resourceId": 38
        },
        {
          "id": 36,
          "params": {},
          "permName": "menu:view",
          "resourceId": 2
        },
        {
          "id": 37,
          "params": {},
          "permName": "role:view",
          "resourceId": 3
        },
        {
          "id": 42,
          "params": {},
          "permName": "dept:view",
          "resourceId": 37
        },
        {
          "id": 47,
          "params": {},
          "resourceId": 1
        },
        {
          "id": 49,
          "params": {},
          "permName": "menu:list",
          "resourceId": 44
        },
        {
          "id": 50,
          "params": {},
          "resourceId": 45
        },
        {
          "id": 44,
          "params": {},
          "permName": "dept:add",
          "resourceId": 39
        },
        {
          "id": 45,
          "params": {},
          "permName": "dept:edit",
          "resourceId": 40
        },
        {
          "id": 46,
          "params": {},
          "permName": "dept:remove",
          "resourceId": 41
        }
      ],
      "roleName": "admin"
    }
  ],
    "menus": [
    {
      "icon": "setting",
      "pid": 0,
      "updateTime": "2019-02-28 17:43:16",
      "sort": 0,
      "params": {},
      "type": "D",
      "path": "/sys",
      "createTime": "2019-01-26 22:04:32",
      "children": [
        {
          "icon": "menu",
          "pid": 1,
          "updateTime": "2019-03-05 17:26:31",
          "sort": 0,
          "params": {},
          "type": "M",
          "path": "/sys/menu",
          "component": "sys/menu",
          "createTime": "2019-02-02 22:21:55",
          "name": "菜单管理",
          "id": 2,
          "state": 0,
          "permName": "menu:view"
        },
        {
          "pid": 1,
          "updateTime": "2019-09-29 10:15:29",
          "sort": 0,
          "params": {},
          "type": "D",
          "path": "test",
          "createTime": "2019-09-29 10:15:29",
          "name": "test",
          "id": 52,
          "state": 0
        },
        {
          "icon": "solution",
          "pid": 1,
          "updateTime": "2019-03-05 17:26:41",
          "sort": 1,
          "params": {},
          "type": "M",
          "path": "/sys/role",
          "component": "sys/role",
          "createTime": "2019-02-04 12:44:40",
          "name": "角色管理",
          "id": 3,
          "state": 0,
          "permName": "role:view"
        },
        {
          "icon": "deployment-unit",
          "pid": 1,
          "updateTime": "2019-03-05 17:26:52",
          "sort": 2,
          "params": {},
          "type": "M",
          "path": "/sys/dept",
          "component": "sys/dept",
          "createTime": "2019-02-27 16:58:39",
          "name": "部门管理",
          "id": 37,
          "state": 0,
          "permName": "dept:view"
        }
      ],
      "name": "系统管理",
      "id": 1,
      "state": 0
    },
    {
      "icon": "deployment-unit",
      "pid": 0,
      "updateTime": "2019-09-27 15:34:55",
      "sort": 0,
      "params": {},
      "type": "D",
      "path": "/demo/map",
      "component": "demo/map",
      "createTime": "2019-09-27 15:33:04",
      "name": "CAD地图",
      "id": 48,
      "state": 0
    },
    {
      "icon": "solution",
      "pid": 0,
      "updateTime": "2019-09-27 15:49:18",
      "sort": 0,
      "params": {},
      "type": "D",
      "path": "/demo/demo",
      "component": "demo/demo",
      "createTime": "2019-09-27 15:46:16",
      "name": "电缆井孔",
      "id": 49,
      "state": 0
    },
    {
      "icon": "solution",
      "pid": 0,
      "updateTime": "2019-09-27 18:05:22",
      "sort": 0,
      "params": {},
      "type": "D",
      "path": "/cable/CableTrenchInfo",
      "component": "cable/CableTrenchInfo",
      "createTime": "2019-09-27 17:51:24",
      "name": "电缆管沟信息",
      "id": 50,
      "state": 0
    },
    {
      "icon": "menu",
      "pid": 0,
      "updateTime": "2019-09-28 21:06:50",
      "sort": 0,
      "params": {},
      "type": "D",
      "path": "/ConstructionSiteManage/ConstructionSiteManage",
      "component": "ConstructionSiteManage/ConstructionSiteManage",
      "createTime": "2019-09-28 21:03:35",
      "name": "施工现场管理",
      "id": 51,
      "state": 0
    }
  ],
    "user": {
    "deptId": 1,
      "admin": true,
      "updateTime": "2019-09-27 10:42:43",
      "avatar": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3377302992,3361149372&fm=27&gp=0.jpg",
      "params": {},
    "roleList": [
      {
        "createTime": "2019-01-24 17:31:03",
        "roleName": "admin",
        "deptPermType": "P",
        "id": 1,
        "permList": [
          {
            "resourceId": 35,
            "id": 32,
            "params": {},
            "permName": "menu:list"
          },
          {
            "resourceId": 15,
            "id": 33,
            "params": {},
            "permName": "menu:add"
          },
          {
            "resourceId": 16,
            "id": 34,
            "params": {},
            "permName": "menu:edit"
          },
          {
            "resourceId": 17,
            "id": 35,
            "params": {},
            "permName": "menu:remove"
          },
          {
            "resourceId": 42,
            "id": 38,
            "params": {},
            "permName": "role:list"
          },
          {
            "resourceId": 31,
            "id": 39,
            "params": {},
            "permName": "role:add"
          },
          {
            "resourceId": 32,
            "id": 40,
            "params": {},
            "permName": "role:edit"
          },
          {
            "resourceId": 34,
            "id": 41,
            "params": {},
            "permName": "role:remove"
          },
          {
            "resourceId": 38,
            "id": 43,
            "params": {},
            "permName": "dept:list"
          },
          {
            "resourceId": 2,
            "id": 36,
            "params": {},
            "permName": "menu:view"
          },
          {
            "resourceId": 3,
            "id": 37,
            "params": {},
            "permName": "role:view"
          },
          {
            "resourceId": 37,
            "id": 42,
            "params": {},
            "permName": "dept:view"
          },
          {
            "resourceId": 1,
            "id": 47,
            "params": {}
          },
          {
            "resourceId": 44,
            "id": 49,
            "params": {},
            "permName": "menu:list"
          },
          {
            "resourceId": 45,
            "id": 50,
            "params": {}
          },
          {
            "resourceId": 39,
            "id": 44,
            "params": {},
            "permName": "dept:add"
          },
          {
            "resourceId": 40,
            "id": 45,
            "params": {},
            "permName": "dept:edit"
          },
          {
            "resourceId": 41,
            "id": 46,
            "params": {},
            "permName": "dept:remove"
          }
        ],
        "params": {}
      }
    ],
      "userName": "admin",
      "nick": "test",
      "createTime": "2019-01-24 17:30:51",
      "id": 1,
      "state": 0
  }
  }

return userInfo;
}

Mock.mock(/\/user\/info/, 'get', info)
// Mock.mock(/\/api\/user\/nav/, 'get', userNav)
