import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import './addEvent.css' 

import {
    nomeInput,
    localInput,
    descricaoInput,
    linkInput,
    corInput,
    duracaoInput,
    adicionarEvento
} from '../../actions/eventType';

class AddEvent extends React.Component {

    constructor(props){
        super(props)
        this.salvaAtualizaCurso = this.salvaAtualizaCurso.bind(this);
        
    }
    salvaAtualizaCurso(e){
        e.preventDefault();

        const {_id, nome, descricao, local, link, cor, duracao} = this.props;

        if((!nome || nome === '')
            || (!descricao || descricao === '')
            || (!local || local === '')
            || (!link || link === '')
            || (!cor || cor === '')
            || (!duracao || duracao === '')){
                alert('Campos obrigatórios não preenchidos!')
                console.log(this.props);
                return;
        }

        if(!_id || _id === ''){
            const userId = 'andrew'
            adicionarEvento(nome, local, descricao, link, cor, duracao, userId)
            alert('Tipo de evento adicionado com sucesso');
        }else{
            // axios.put(URL+_id, { codigo, descricao, cargaHoraria, preco, categoria})
            // .then(_ => {
            //     alert("Curso atualizado");
            //     this.limpaForm();
            //     this.getLista();
            // })
            // .catch(_ => alert("Não foi possível atualizar o curso."));
        }
    }

  render() {
    const {nome, descricao, local, link, duracao, cor, nomeInput, descricaoInput, localInput, linkInput, duracaoInput, corInput} = this.props;
    const props =this.props;

    return (
        <div>
            <form className="addEventForm">
                <div>
                    <label>Nome do evento</label>
                    <input value={nome} onChange={nomeInput}  />

                    <label>Local</label>
                    <input value={local} onChange={localInput}  />

                    <label>Descrição</label>
                    <input value={descricao} onChange={descricaoInput} />
                </div>
                <div className="addEventRightForm">
                    <label>Link do evento:</label>
                    <input value={link} onChange={linkInput} />

                    <label>Cor do evento *</label>
                    <input value={cor} onChange={corInput} />

                    <label>Duração do evento</label>
                    <input value={duracao} onChange={duracaoInput} />
                </div>
            </form>
            <button onClick={this.salvaAtualizaCurso}>Cadastrar evento</button>
        </div>
    )
  }

}

const mapStateToProps = state => ({
    nome: state.addEvent.nome,
    descricao: state.addEvent.descricao,
    local: state.addEvent.local,
    link: state.addEvent.link,
    duracao : state.addEvent.duracao,
    cor: state.addEvent.cor,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    nomeInput,
    descricaoInput,
    localInput,
    linkInput,
    duracaoInput,
    corInput,
    adicionarEvento
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);