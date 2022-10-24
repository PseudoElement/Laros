import { Button, CarIcon, ConfirmIcon, Modal } from 'components';
import Link from 'next/link';
import { FC, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Car } from 'shared/types/car';
import { getCarGroups, getCarsByGroup } from 'store/slices/transfer/selectors';
import { CarCard } from './CarCard';
import s from './ChangeTransferModal.module.scss';
interface ChangeTransferModalProps {
    cars: Car[]
    current: number
    isOpen: boolean;
    onClose: () => void;
    onClick: (id: number) => void
};
export const ChangeTransferModal: FC<ChangeTransferModalProps> = ({ isOpen, onClose, onClick, cars, current }) => {
    const [selectedCar, setSelectedCar] = useState(current)
    const currentCar: Car = cars.find((car) => car.id === selectedCar) as Car;
    return (
        <Modal title='Changing transfer option' isOpen={isOpen} onClose={onClose} >
            <div className={s.container}>
                <div className={s.title}>Available transfer options:</div>
                <div className={s.current}>
                    <div className={s.currentTitle}>Current</div>
                    <div className={s.currentModel}>
                        <div className={s.currentIcon}><ConfirmIcon /></div>
                        <div className={s.currentName}>{currentCar.model}</div>
                    </div>
                    <div className={s.currentDescription}>{currentCar.description}</div>
                </div>
                <div className={s.cars}>
                    <div className={s.header}>
                        <div className={s.headerContainer}>
                            <div className={s.headerIcon}><CarIcon /></div>
                            <div className={s.headerTitle}>Car rental</div>
                            <div className={s.headerTerms}>Car Rental <span className={s.termsLink}><Link href='/terms'> Terms and Conditions</Link></span></div>
                        </div>
                        <div className={s.headerDescription}>Etiam aliquam pretium praesent egestas placerat semper vestibulum fermentum, sit. Duis arcu ultrices et arcu.</div>
                    </div>
                    <div className={s.tabsSection}>
                        <Tabs selectedTabClassName={s.selectedTab} defaultIndex={0} className={s.tabs}>
                            <TabList className={s.tabList}>
                                {getCarGroups(cars).map((group) => {
                                    return <Tab className={s.tab}>{group}</Tab>
                                })}
                            </TabList>
                            {getCarGroups(cars).map((group) => {
                                return <TabPanel className={s.tabPanel}>
                                    <div className={s.carsList}>
                                        {getCarsByGroup(cars, group).map((car) =>
                                            <CarCard onClick={(id) => setSelectedCar(id)} {...car} />
                                        )}
                                    </div>
                                </TabPanel>
                            })}
                        </Tabs>
                    </div>
                </div>
                <div className={s.actions}>
                    <Button onClick={() => onClick(selectedCar)}>Save changes</Button>
                    <Button onClick={onClose} variant='outline'>Cancel</Button>
                </div>
            </div>
        </Modal>
    )
}