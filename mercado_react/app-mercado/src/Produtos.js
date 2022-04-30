import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProdutosList from "./ProdutosList";
import ProdutosForm from "./ProdutosForm";


function Produtos(){
    let produtosList = [
        {id:5, tipo: 'limpeza', nome: 'Sabão em pó', valor: 12.99 },
        {id:6, tipo: 'alimetos', nome: 'Bolacha recheada', valor: 2.5}
    ]
    const [produtos, setProdutos] = useState(produtosList)
    
    const onClickAtualizar=() =>{
        produtosList = [
            {id:5, tipo: 'limpeza', nome: 'Sabão em pó', valor: 12.99 },
            {id:6, tipo: 'alimetos', nome: 'Bolacha recheada', valor: 2.5},
            {id:7, tipo: 'alimetos', nome: 'Presunto', valor: 6.59}
        ];
        setProdutos(produtosList);
    }

    const initialState = {id:null, tipo:'', nome:'', valor:0}
    const[produto, setProduto] = useState(initialState)
    const [editando, setEditando] = useState(false)
    const onClickInserir = () =>{
        setProduto(initialState);
        setEditando(true);
    }
    const onClickSalvar = () =>{
        console.log('Salvar ...');
        if(produto.id == null){
            produto.id = produtos.length +1
            setProdutos([...produtos, produto])
        } else{
            setProdutos(produtos.map((find) => (find.id === produto.id ? produto : find)))
        }
        setEditando(false);
    }
    const onClickCancelar = () =>{
        console.log('Cancelou...');
        setEditando(false);
    }


    const editar = (id) => {
        setProduto(produtos.filter((produto) => produto.id == id)[0]);
        setEditando(true);
    }

    const excluir = (id) => {
        setProduto(produtos.filter((produto) => produto.id !== id)[0]);
    }
    <ProdutosList produtos={produtos} onClickAtualizar={onClickAtualizar}
        onClickInserir={onClickInserir} editar={editar} excluir={excluir}/>

    if(!editando) {
        return(
            <div className="App">
                <ProdutosList produtos={produtos} onClickAtualizar={onClickAtualizar}
                onClickInserir={onClickInserir} />
            </div>
        );
    } else{
        return(
            <div className="App">
                <ProdutosForm produto={produto} setProduto={setProduto} onClickSalvar={onClickSalvar}
                onClickCancelar={onClickCancelar}/>
            </div>
        );
    }


}

export default Produtos;