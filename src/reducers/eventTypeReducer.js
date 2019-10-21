const INITIAL_STATE = {
    _id : '',
    nome: '', 
    local: '', 
    descricao: '', 
    link: '', 
    cor: '',
    duracao: '',
    userId: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NOME_INPUT': return { ...state, nome: action.info }
        case 'LOCAL_INPUT': return { ...state, local: action.info }        
        case 'DESCRICAO_INPUT': return { ...state, descricao: action.info }
        case 'LINK_INPUT': return { ...state, link: action.info }
        case 'COR_INPUT': return { ...state, cor: action.info }
        case 'DURACAO_INPUT': return { ...state, duracao: action.info }
        case 'ADICIONAR_EVENTO': return {INITIAL_STATE}
        
        default: return state;
    }
}