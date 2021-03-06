import axios from 'axios';

const URL = 'http://localhost:3000/events'

export const nomeInput = e => ({
    type: 'NOME_INPUT',
    info: e.target.value
});

export const emailInput = e => ({
    type: 'EMAIL_INPUT',
    info: e.target.value
});

export const cpfInput = e => ({
    type: 'CPF_INPUT',
    info: e.target.value
});

export const dataInput = e => ({
    type: 'DATA_INPUT',
    info: e.target.value
});

export const horaInput = e => ({
    type: 'HORA_INPUT',
    info: e.target.value
});

export const adicionarInscricao = (name, date, userId, clientName) => {
    const request = axios.post(URL, { name, date, userId, clientName});
    return {
        type: 'ADICIONAR_INSCRICAO',
        info: request
} };