import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { dialogSize } from './style';

type DialogCustomProps = {
    title?: string
    trigger?: React.ReactElement
    description?: string
    onSubmit?: () => void;
    children?: React.ReactElement | React.ReactElement[]
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
}




const DialogCustom = ({title, open, description, onOpenChange, trigger, children, size = 'small'}: DialogCustomProps) => {
  

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
          {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-300/50 data-[state=open]:animate-overlayShow fixed inset-0">
          <Dialog.Content className={dialogSize({size})}>
              <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  {title}
              </Dialog.Title>
              {description && <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              {description}
              </Dialog.Description>}
              <div className='pt-4'>
                {children}
              </div>
              <Dialog.Close asChild>
              <button
                  
                  className="text-gray-400 hover:bg-gray-200/50 focus:shadow-gray-700 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
              >
                  <Cross2Icon />
              </button>
              </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
};

export default DialogCustom;