import { StyledContainer, StyledLogoutButton } from "./style";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../../context/UserContext";
import { motion } from "framer-motion";

interface iModalLogout {
  setIs: (arg0: boolean) => void;
}

const ModalLogout = ({ setIs }: iModalLogout) => {
  const { setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    setIsLogged(false);
    setIs(false);
    navigate("/login", { replace: true });
  };

  const modalRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function handleOutClick(event: any) {
      if (!modalRef.current?.contains(event.target)) {
        setIs(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIs]);

  return (
    <StyledContainer
      ref={modalRef}
      as={motion.div}
      key={0}
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <StyledLogoutButton
        padding={10}
        onClick={() => {
          setIs(false);
          navigate("/profile", { replace: true });
        }}
      >
        <FaUser /> Perfil
      </StyledLogoutButton>

      <StyledLogoutButton onClick={logout}>
        <ImExit />
        Sair
      </StyledLogoutButton>
    </StyledContainer>
  );
};

export default ModalLogout;
