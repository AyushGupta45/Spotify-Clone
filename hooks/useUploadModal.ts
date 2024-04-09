import { create } from 'zustand';

interface UplaodModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUplaodModal = create<UplaodModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUplaodModal;