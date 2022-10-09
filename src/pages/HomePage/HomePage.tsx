import { Modal } from 'components/Modal'
import { FC, useState } from 'react'

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return <>
    <div onClick={() => setIsModalOpen(true)} >Hi</div>
    <Modal title='Contact Form' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Hello!</Modal>
  </>

}
