import styles from './UsePolicyModal.module.scss';
import {Modal, ModalProps} from 'antd';



const UsePolicyModal:React.FC<ModalProps> = ({
    open = true,
    onCancel,
    width = 455,
    title
}) => {

    return (
        <Modal
            title={title}
            className={`${styles.wrapper} modal`}
            width={width}
            open={open}
            onCancel={onCancel}
            >
            <div className={`${styles.body} custom-scroll`} >
                <p>
                <h4>Пользовательское соглашение</h4>
                <br/>
                Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем https://adtbot.com (далее ADTBot или Администрация) с одной стороны и пользователем сайта с другой.
                <br/>
                <br/>
                Сайт ADTBot не является средством массовой информации.
                <br/>
                <br/>
                Используя сайт, Вы соглашаетесь с условиями данного соглашения.
                <br/>
                <br/>
                Если Вы не согласны с условиями данного соглашения, не используйте сайт ADTBot!
                <br/>
                <br/>
                <h4>Права и обязанности сторон</h4>
                <br/>
                Пользователь имеет право:
                <br/>
                <br/>
                <ul>
                    <li>осуществлять поиск информации на сайте</li>
                    <li>получать информацию на сайте</li>
                    <li>комментировать контент, выложенный на сайте</li>
                    <li>копировать информацию на другие сайты с указанием источника</li>
                    <li>копировать информацию на другие сайты с разрешения Администрации сайта</li>
                    <li>требовать от администрации скрытия любой информации о пользователе</li>
                    <li>требовать от администрации скрытия любой информации переданной пользователем сайту</li>
                    <li>использовать информацию сайта в личных некоммерческих целях</li>
                    <li>использовать информацию сайта в коммерческих целях без специального разрешения</li>
                </ul>
                <br/>
                <br/>
                Администрация имеет право:
                <br/>
                <br/>
                <ul>
                    <li>по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
                    <li>ограничивать доступ к любой информации на сайте</li>
                    <li>создавать, изменять, удалять информацию</li>
                    <li>удалять учетные записи</li>
                    <li>отказывать в регистрации без объяснения причин</li>
                </ul>
                <br/>
                <br/>
                Пользователь обязуется:
                <ul>
                    <li>обновлять Персональные данные, предоставленные при регистрации, в случае их изменения</li>
                    <li>не нарушать работоспособность сайта</li>
                    <li>не создавать несколько учетных записей на Сайте, если фактически они принадлежат одному и тому же лицу</li>
                    <li>не совершать действия, направленные на введение других Пользователей в заблуждение</li>
                    <li>не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам</li>
                    <li>не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами</li>
                </ul>
                <br/>
                <br/>
                Администрация обязуется:
                <br/>
                <br/>
                <ul>
                    <li>поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам</li>
                    <li>осуществлять разностороннюю защиту учетной записи Пользователя</li>
                    <li>защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила</li>
                </ul>
                <br/>
                <br/>
                <h4>Ответственность сторон</h4>
                <br/>
                <ul>
                    <li>администрация не несет ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг</li>
                    <li>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
                    <li>в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) </li>
                    <li>Администрация не гарантирует сохранность информации, размещенной Пользователем, а также бесперебойную работу информаци онного ресурса</li>
                </ul>
                <br/>
                <br/>
                <h4>Условия действия Соглашения</h4>
                <br/>
                <ul>
                    <li>Данное Соглашение вступает в силу при любом использовании данного сайта.</li>
                    <li>Соглашение перестает действовать при появлении его новой версии.</li>
                    <li>Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.</li>
                    <li>Администрация не оповещает пользователей об изменении в Соглашении.</li>
                </ul>
                
                
                
                
                
               
                
                
                
                
                </p>
            </div>
        </Modal>
    )
}

export default UsePolicyModal;