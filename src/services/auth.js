import axios from '@/utils/common';

/*
|-------------------------------------------------------------------------------
| Braider Registration
|-------------------------------------------------------------------------------
*/
export const braiderRegister = async data => await axios.post(`braider/register`,data);
/*
|-------------------------------------------------------------------------------
| Braider Login
|-------------------------------------------------------------------------------
*/
export const braiderLogin = async data => await axios.post(`braider/login`,data);
/*
|-------------------------------------------------------------------------------
| Get all services
|-------------------------------------------------------------------------------
*/
export const services = async () => await axios.get(`services`);
/*
|-------------------------------------------------------------------------------
| Customer Registration
|-------------------------------------------------------------------------------
*/
export const customerRegister = async data => await axios.post(`customer/register`,data);
/*
|-------------------------------------------------------------------------------
| Setting
|-------------------------------------------------------------------------------
*/
export const settings = async () => await axios.get(`setting`);