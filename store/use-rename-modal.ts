import { create } from 'zustand';

const defaultValues = {id: "", title: ""};

interface IRenameModal {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpen: (initialValues: typeof defaultValues) => void;
  onClose: () => void;
}


export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (initialValues: typeof defaultValues) => set({ isOpen: true, initialValues }),
  onClose: () => set({ isOpen: false, initialValues: defaultValues}),
  initialValues: defaultValues,
}));
