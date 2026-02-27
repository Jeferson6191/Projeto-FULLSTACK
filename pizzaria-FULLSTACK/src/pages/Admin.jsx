import { useState, useEffect } from "react";
import '../style/admin.css'




const Admin = () => {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pedidos")
      .then(res => res.json())
      .then(data => setPedidos(data));
  }, []);

  async function finalizarPedido(id) {
    await fetch(`http://localhost:3000/pedidos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Finalizado" })
    });

    // Atualiza na tela depois
    setPedidos(pedidos.map(p =>
      p.id == id ? { ...p, status: "Finalizado" } : p
    ));
  }

    return (
        <div className="container">
            <header className="header">
                <img src="/img/logo.png" alt="" />
            </header>
            <div class="parent">
                <div class="div1">
                    <h3>Dashboard</h3>
                    <h3>Pedidos</h3>
                    <h3>Cardapio</h3>
                    <h3>Usuarios</h3>
                </div>
            </div>

            <main className='main-container'>
                <div className="card-main">
                    <div className="card-pedidos">Pedidos Hoje</div>
                    <div className="card-faturamento">Faturamento do dia</div>
                    <div className="card-andamento">Em andamento</div>
                    <div className="card-finalizado">Finalizados</div>
                </div>

                <section className="gerenciamento-pedidos">

                </section>
                <hr />
                
                <section className="cardapio">
                    <div className="btn-alinhado">
                        <button>+ Adicionar Pizza</button>
                        <button>Editar Pizza</button>
                        <button>Remover Pizza</button>
                    </div>
                    <div className="table-pizza">
                        <table>
                            <tr>
                                <th>Nome da Pizza</th>
                                <th>Preco</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                            </tr>

                        </table>
                    </div>
                </section>

            </main>

        </div>
    )
}

export default Admin