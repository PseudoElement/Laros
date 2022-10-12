import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { FC, useState } from 'react'

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState<string | number>('')
  return <div style={{ marginTop: '15px', width: '400px' }}>
    <div style={{ marginTop: '15px' }} onClick={() => setIsModalOpen(true)} ></div>
    <Input id='num' value='' type='number' label='Number' onChange={(v) => setInput(v)} />
    <Input placeholder='Mark' id='name' value={input} label='Fullname and surname' onChange={(v) => setInput(v)} />
    <Modal title='Contact Form' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Hello!</Modal>
  </div>

}
