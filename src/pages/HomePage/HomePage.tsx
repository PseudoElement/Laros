import { Modal } from 'components/Modal'
import { Radio } from 'components/Radio'
import { FC, useState } from 'react'

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [checkboxValue, setCheckboxValue] = useState('man')
  return <>
    <div onClick={() => setIsModalOpen(true)} >Hi</div>
    <Radio onChange={(v) => setCheckboxValue(v)} name='sex' options={[{ label: 'Man', value: 'man' }, { label: 'Woman', value: 'woman' }, { label: 'No', value: 'no' }]} value={checkboxValue} />
    <Modal title='Contact Form' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Hello!</Modal>
  </>

}
