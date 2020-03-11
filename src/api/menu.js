import { axios } from '@/utils/request'
import api from "./index";

export function getMenuList (params) {
  return axios({
    url: api.HttpUrl+'/sys/menu/list',
    method: 'post',
    data: params
  })
}

export const addMenu = (params) => {
  return axios({
    url: api.HttpUrl+'/sys/menu/add',
    data: {
      ...params
    },
    method: 'post'
  })
}

export const updateMenu = (params) => {
  return axios.request({
    url: api.HttpUrl+'/sys/menu/update',
    data: {
      ...params
    },
    method: 'post'
  })
}

export const deleteMenu = (id) => {

  return axios.request({
    url: api.HttpUrl+'/sys/menu/delete',
    data: {
      id
    },
    method: 'post'
  })
}

export const getMenuWithRoleStatus = (params) => {
  return axios.request({
    url: api.HttpUrl+'/sys/menu/listRole',
    data: {
      ...params
    },
    method: 'post'
  })
}
