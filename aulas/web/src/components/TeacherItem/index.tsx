import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import'./styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="Danilo Vieira"/>
        <div>
          <strong>Guilherme Martins</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt 
        <br/> <br/>
        repudiandae, accusantium architecto, voluptate corporis obcaecati 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;