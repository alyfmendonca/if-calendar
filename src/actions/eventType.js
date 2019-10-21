import axios from 'axios';

const URL = 'http://localhost:3000/eventType'

export const nomeInput = e => ({
    type: 'NOME_INPUT',
    info: e.target.value
});

export const localInput = e => ({
    type: 'LOCAL_INPUT',
    info: e.target.value
});

export const descricaoInput = e => ({
    type: 'DESCRICAO_INPUT',
    info: e.target.value
});

export const linkInput = e => ({
    type: 'LINK_INPUT',
    info: e.target.value
});

export const corInput = e => ({
    type: 'COR_INPUT',
    info: e.target.value
});

export const duracaoInput = e => ({
    type: 'DURACAO_INPUT',
    info: e.target.value
});


export const adicionarEvento = (nome, local, descricao, link, cor, duracao, userId) => {
    const request = axios.post(URL, { nome, local, descricao, link, cor, duracao, userId});
    return {
        type: 'ADICIONAR_EVENTO',
        info: request
} };