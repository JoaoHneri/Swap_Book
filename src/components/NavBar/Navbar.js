import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <div className={`${styles.container} `}>
        <div className="row">
          <div className="d-flex p-3 col-12">
            <div className="col-3">
              <h3 className="">Swap Book</h3>
            </div>
            <div className="col-5">
              <form className="">
                <input placeholder="Pesquise um livro" />
                <button className={`${styles.btn1} `}>Pesquisar</button>
              </form>
            </div>
            <div className="col-3">
              <AiOutlineShoppingCart className={`${styles.btn_user} `} />
              <BsChat className={`${styles.btn_user} `} />
              <FaUserCircle className={`${styles.btn_user} `} />
              <button className={`${styles.btn2} btn btn-primary`}>
                Anunciar
              </button>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
