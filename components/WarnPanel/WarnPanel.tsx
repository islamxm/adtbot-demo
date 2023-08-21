import styles from './WarnPanel.module.scss';
import Button from '../Button/Button';
import { ReactNode } from 'react';


const WarnPanel = ({
    text = <p>На балансе платформы закончились средства.<br/>
    Функционал платформы ограничен.</p>
}: {
    text?: ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                {text}
            </div>
            <div className={styles.action}>
                <Button
                    variant={'danger'}
                    text='Пополнить'
                    fill
                    />
            </div>
        </div>
    )
}

export default WarnPanel;