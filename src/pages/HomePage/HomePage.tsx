import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { Radio } from 'components/Radio'
import { FC, useState } from 'react'

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState<string | number>('')
  const [checkboxValue, setCheckboxValue] = useState('man')
  //TODO move to example page
  return <div style={{ marginTop: '15px', width: '400px' }}>
    <div style={{ marginTop: '15px' }} onClick={() => setIsModalOpen(true)} ></div>
    <Radio onChange={(v) => setCheckboxValue(v)} name='sex' options={[{ label: 'Man', value: 'man' }, { label: 'Woman', value: 'woman' }, { label: 'No', value: 'no' }]} value={checkboxValue} />
    <Input id='num' value='' type='number' label='Number' onChange={(v) => setInput(v)} />
    <Input placeholder='Mark' id='name' value={input} label='Fullname and surname' onChange={(v) => setInput(v)} />
    <Modal title='Contact Form' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Hello!</Modal>
  </div>

}
