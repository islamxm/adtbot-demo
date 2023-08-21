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
                    onClick={() => window.location.replace('https://console.adtbot.com/auth/join')}
                    variant={'danger'}
                    text='Зарегистрироваться'
                    fill
                    />
            </div>
        </div>
    )
}

export default WarnPanel;