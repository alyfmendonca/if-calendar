const INITIAL_STATE = {
    _id : '',
    nome: '', 
    email: '', 
    cpf: '', 
    data: '', 
    hora: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NOME_INPUT': return { ...state, nome: action.info }
        case 'EMAIL_INPUT': return { ...state, email: action.info }        
        case 'CPF_INPUT': return { ...state, cpf: action.info }
        case 'DATA_INPUT': return { ...state, data: action.info }
        case 'HORA_INPUT': return { ...state, hora: action.info }
        case 'ADICIONAR_EVENTO': return {INITIAL_STATE}
        
        default: return state;
    }
}