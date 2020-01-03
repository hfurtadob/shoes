import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
