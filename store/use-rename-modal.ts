import { create } from 'zustand';

export const defaultValues = {id: "", title: ""};
export type RenameDefaultValues = typeof defaultValues;

interface IRenameModal {
  isOpen: boolean;
  initialValues: RenameDefaultValues;
  onOpen: (initialValues: RenameDefaultValues) => void;
  onClose: () => void;
}


export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (initialValues: RenameDefaultValues) => set({ isOpen: true, initialValues }),
  onClose: () => set({ isOpen: false, initialValues: defaultValues}),
  initialValues: defaultValues,
}));
