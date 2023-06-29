import React from "react";
import styles from "./myCards.module.css";
import api from "../../../Services/Api";
import { useEffect, useContext } from "react";
import { UserContext } from "../../UseContext/UserContext";
import { Link } from "react-router-dom";
import { Dropdown, IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import MoreIcon from "@rsuite/icons/More";
import TrashIcon from "@rsuite/icons/Trash";
import EditIcon from "@rsuite/icons/Edit";
import { FaIcon } from "react-icons/fa";
import "../MyAnnunciments/mycard.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const renderIconButton = (props, ref) => {
  return (
    <IconButton
      {...props}
      ref={ref}
      icon={<MoreIcon />}
      circle
      color="blue"
      appearance="primary"
      className="z-3 position-absolute"
    />
  );
};

const MyCards = ({ name, author, price, synopsis, _id, src, createdAt }) => {
  const [userData, setUserData] = useContext(UserContext);
  const MySwal = withReactContent(Swal);

  async function deleteProduct() {
    try {
      await api.delete(`${userData._id}/product/${_id}`, {
        headers: {
          auth: userData._id,
        },
      });
      MySwal.fire({
        title: 'Sucesso',
        text: 'Produto deletado com sucesso',
        icon: 'success',
        confirmButtonText: 'Ok',
        didOpen: () => {
          MySwal.stopTimer()
        },
      })
    } catch (err) {
      MySwal.fire({
        title: 'Erro ao deletar',
        text: 'Verifique sua Rede',
        icon: 'error',
        confirmButtonText: 'Ok',
        didOpen: () => {
         
          MySwal.stopTimer()
        },
      })
    }
  }

  // Function to extract only the date part from the createdAt value
  const extractDate = (createdAt) => {
    if (!createdAt) return ""; // Verificar se createdAt está definido

    const dateParts = createdAt.split(" ")[0].split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="card-anum">
      <Dropdown
        className="dropdown-annum"
        title=""
        renderToggle={renderIconButton}
      >
        <Dropdown.Item
          id="drop-edit1"
          icon={<TrashIcon id="icon-delete" />}
          onClick={deleteProduct}
        ></Dropdown.Item>
        <Link to={`/editar_produto/${_id}`}>
          <Dropdown.Item
            id="drop-edit2"
            icon={<EditIcon id="icon-edit" />}
          ></Dropdown.Item>
        </Link>
      </Dropdown>
      <img
        src={`${process.env.REACT_APP_API}/${src}`}
        alt="Imagem do livro"
        className="book-image"
      />
      <div className="card-content d-flex flex-wrap">
        <h2 className="book-title">{name}</h2>
        <p className="book-synopsis">{synopsis}</p>
        <p className="book-sy">Postado na data: {createdAt} </p>         
      </div>
      
    </div>
  );
};

export default MyCards;
