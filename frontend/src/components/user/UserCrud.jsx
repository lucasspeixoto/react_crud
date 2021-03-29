import React, { Component } from 'react'
import axios from 'axios'
import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

/*Criação do estado inicial do componente, para clicar em cancelar no
formulário, ele restaurar o estado inicial */
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    /* Incluir novo usuário e alterar usuário */
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //user.id ? = id válido (!=0)
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        //Axios é uma API http client baseado em promisse
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                //Depois de adicionar vamos limpar o formulário
                this.setState(({ user: initialState.user, list }))
            })
    }

    getUpdatedList(user) {
        //Obtendo uma lista excluindo o usuário que foi passado
        const list = this.state.list.filter(u => u.id !== user.id)

        //Readicionar esse usuário, porem na primeira posição
        list.unshift(user)

        return list
    }

    //Atualizar os nossos campos
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value //Serva tanto para input de nome quanto de e-mail
        this.setState({ user })

    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    {/* Nome */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Inserir o nome..." />
                        </div>
                    </div>

                    {/* E-mail */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Inserir o e-mail..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}