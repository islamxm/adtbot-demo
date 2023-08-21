import Button from '@/components/Button/Button';
import styles from './DemoModal.module.scss';
import {Row, Col, Modal, ModalFuncProps} from 'antd';
import {FC} from 'react'



const DemoModal:FC<ModalFuncProps> = (props) => {
    const {onCancel} = props

    return (
        <Modal
            {...props}
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[25,25]}>
                <Col span={24}>
                    <div className='ant-modal-title'>Данный функционал доступен только зарегистрированным пользователям</div>
                </Col>
                <Col span={24}>
                    <Row gutter={[20,20]}>
                        <Col span={12}>
                            <Button
                                text='Отмена'
                                fill
                                onClick={() => onCancel && onCancel()}
                                />
                        </Col>
                        <Col span={12}>
                            <Button
                                variant={'simple'}
                                text='Зарегистрироваться'
                                fill
                                onClick={() => window.location.replace('https://console.adtbot.com/auth/join')}
                                />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    )
}

export default DemoModal;