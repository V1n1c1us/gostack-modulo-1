import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.13:3333'
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com disposivo físico: ip da máquina
 * Android com Emulador: localhost (adb reverse)
 */