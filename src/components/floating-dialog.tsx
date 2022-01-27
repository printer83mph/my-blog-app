import React from 'react'
import { Dialog } from '@headlessui/react'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const FloatingDialog = ({ isOpen, onClose, children }: DialogProps) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    className="fixed z-10 inset-0 overflow-y-auto"
  >
    {/* container */}
    <div className="flex items-center justify-center min-h-screen">
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

      {/* actual dialog */}
      <div className="relative bg-white rounded-xl max-w-sm mx-auto p-5 shadow-md">
        {children}
      </div>
    </div>
  </Dialog>
)

export default FloatingDialog
