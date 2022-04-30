import React, {useState} from "react";

function ProdutosForm(props){
    const handleInputChange = (event) =>{
        const {name, value } = event.target
        props.setProduto({...props.produto, [name]:value})
    }



    return(
        <div>
            <form>
                <div class="form-group">
                    <label>Tipo</label>
                    <input class="form-control" type="text" name="tipo"
                        value={props.produto.tipo} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                    <label>Nome</label>
                    <input class="form-control" type="text" name="nome"
                        value={props.produto.nome} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                    <label>Valor</label>
                    <input class="form-control" type="number" name="valor"
                        value={props.produto.valor} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                    <button type="button" onClick={props.onClickSalvar}
                        className="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" onClick={props.onClickCancelar}
                        className="btn btn-danger btn-sm">Cancelar</button>
                </div>
            </form>
        </div>
    );


}

export default ProdutosForm;