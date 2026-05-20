import Image from "next/image";
import TabRegisterForm from "../forms/TabRegisterForm";
import { useEffect, useState } from "react";
import TabLoginForm from "../forms/TabLoginForm";

const Modal = ({ data, isOpen, setIsOpen, type }) => {
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState(type);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setModalType(type);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, type]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 200);
  };
  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-tab-fadeIn transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-[#ffffff] p-[4.8rem] w-[48.6rem] relative overflow-y-auto max-h-[90vh]">
        <div className="flex justify-end">
          <button onClick={handleClose}>
            <Image
              src={data?.regForm?.closeImg}
              alt={data?.regForm?.closeImgAlt}
              width={24}
              height={24}
            />
          </button>
        </div>
        {modalType === "login" ? (
          <TabLoginForm formData={data} setType={setModalType} />
        ) : (
          <TabRegisterForm formData={data} setType={setModalType} />
        )}
      </div>
    </div>
  );
};

export default Modal;
