import { reqSignup, reqLogin, reqEmail, reqEditUder } from '../types/apiTypes'
import { createService } from './createService'

const apiService = createService({baseURL: `${import.meta.env.VITE_HOST}${import.meta.env.VITE_API_FRONT_PATH}`})

export const verifyEmail = async (data: reqEmail) => {
    return apiService({
        url: '/verify/email',
        method: 'POST',
        data
    }).then(d => d).catch((e: any) => e)
}

export const generateEmailCode = async (data: reqEmail) => {
    return apiService({
        url: '/verify/generateEmailCode',
        method: 'POST',
        data
    }).then(d => d).catch((e: any) => e)
}

export const signup = async (data: reqSignup) => {
    return apiService({
        url: '/user/signup',
        method: 'POST',
        data
    }).then(d => d).catch((e: any) => e)
}

export const login = async (data: reqLogin) => {
    return apiService({
        url: '/user/login',
        method: 'POST',
        data
    }).then(d => d).catch((e: any) => e)
}

export const loginCheck = async () => {
    return apiService({
        url: '/user/check',
        method: 'GET',
    }).then(d => d).catch((e: any) => e)
}

export const getUser = async () => {
    return apiService({
        url: '/user',
        method: 'GET',
    }).then(d => d).catch((e: any) => e)
}

export const editUser = async (data: reqEditUder) => {
    return apiService({
        url: '/user',
        method: 'PUT',
        data
    }).then(d => d).catch((e: any) => e)
}

export const getNews = async (param: string | undefined) => {
    return apiService({
        url: `/home/news${param ? '/'+param : ''}`,
        method: 'GET',
    }).then(d => d).catch((e: any) => e)
}

export const getCulinary = async (param: string | undefined) => {
    return apiService({
        url: `/home/culinary${param ? '/'+param : ''}`,
        method: 'GET',
    }).then(d => d).catch((e: any) => e)
}

export const getRooms = async (param: string | undefined) => {
    return apiService({
        url: `/rooms${param ? '/'+param : ''}`,
        method: 'GET',
    }).then(d => d).catch((e: any) => e)
}