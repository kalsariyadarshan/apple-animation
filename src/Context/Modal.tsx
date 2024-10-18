import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

type ModalContextTypes = {
  isShowForm: boolean;
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  isShowPlanModal: boolean;
  setIsShowPlanModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext({
  isShowForm: false,
  isShowPlanModal: false,
  setIsShowForm: () => {},
  setIsShowPlanModal: () => {},
} as ModalContextTypes);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowPlanModal, setIsShowPlanModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isShowForm,
        setIsShowForm,
        isShowPlanModal,
        setIsShowPlanModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
