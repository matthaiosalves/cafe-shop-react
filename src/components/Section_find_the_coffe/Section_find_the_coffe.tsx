import './style.css'
import Coffe from '../../assets/coffe.png'

export const Section_find_the_coffe = () => {
  return (
  <section className="find-the-coffe">
    <div className="container">
      <div className="box-title">
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        </div>
        <div className="description">
          <small>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</small>
        </div>

        <div className="box-itens">
          <div className="item">
            <p className="buy">Compra simples e segura</p>
            <p className="delivery">Entrega rápida e rastreada</p>
          </div>
          <div className="item">
            <p className="packing">Embalagem mantém o café intacto</p>
            <p className="fresh">O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <div className="box-image">
        <img src={Coffe} />
      </div>
    </div>
  </section>
  );
}