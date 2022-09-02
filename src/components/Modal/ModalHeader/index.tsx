import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";
import { StyledNavButton } from "../../Header/style";
import Modal from "../ModalBase";
import { StyledSideHeader } from "./style";

const ModalHeader = () => {
  const { setIsModalHeader, setIsModalDice } = useContext(ModalContext);
  return (
    <>
      <Modal setIs={setIsModalHeader}>
        <StyledSideHeader>
          <ul>
            <li>
              Jotinha
              <span>100g</span>
            </li>
            <li>
              <FaUser />
              <Link to={"/profile"}>Perfil</Link>
            </li>
            <li>
              <FaHome />
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <GiOpenTreasureChest />
              <StyledNavButton
                onClick={() => {
                  setIsModalHeader(false);
                  setIsModalDice(true);
                }}
              >
                Recompensa
              </StyledNavButton>
            </li>
            <li>
              <BsFillCartFill />
              <Link to={"/marketplace"}>Mercado</Link>
            </li>
            <li>
              <IoIosHelpCircle />
              <Link to={"/"}>Ajuda</Link>
            </li>
            <li>
              <IoPeopleSharp />
              <Link to={"/"}>Sobre nós</Link>
            </li>
            <li>
              <StyledNavButton>Sair</StyledNavButton>
            </li>
          </ul>
        </StyledSideHeader>
      </Modal>
    </>
  );
};

export default ModalHeader;
