import styles from './icon.module.scss';
import { iconType } from './types';


const IconWarning = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5232 24.7634C21.1427 24.7608 20.7785 24.6086 20.5095 24.3395C20.2404 24.0705 20.0882 23.7063 20.0857 23.3258V13.7418C20.0882 13.3613 20.2404 12.9971 20.5095 12.728C20.7785 12.459 21.1427 12.3067 21.5232 12.3042C21.9037 12.3067 22.2679 12.459 22.537 12.728C22.8061 12.9971 22.9583 13.3613 22.9608 13.7418V23.3258C22.9583 23.7063 22.8061 24.0705 22.537 24.3395C22.2679 24.6086 21.9037 24.7608 21.5232 24.7634Z" fill={isActive ? activeColor : color}/>
            <path d="M21.5234 30.9869C21.3949 30.9827 21.2668 30.9699 21.14 30.9486C21.0199 30.9277 20.9036 30.8889 20.795 30.8336C20.6728 30.7917 20.5568 30.7337 20.45 30.661L20.1624 30.431C19.8125 30.0635 19.614 29.5775 19.6066 29.0701C19.6154 28.5647 19.8138 28.081 20.1624 27.7149L20.45 27.483C20.5568 27.4104 20.6728 27.3524 20.795 27.3105C20.9036 27.2551 21.0199 27.2164 21.14 27.1955C21.3859 27.138 21.6417 27.138 21.8876 27.1955C22.0145 27.2133 22.1376 27.2521 22.2517 27.3105C22.3739 27.3524 22.4899 27.4104 22.5968 27.483L22.8843 27.713C23.2333 28.0796 23.4318 28.564 23.4402 29.0701C23.4327 29.5775 23.2342 30.0635 22.8843 30.431L22.5968 30.661C22.4899 30.7337 22.3739 30.7917 22.2517 30.8336C22.1376 30.8919 22.0145 30.9308 21.8876 30.9486C21.7673 30.9708 21.6456 30.9836 21.5234 30.9869Z" fill={isActive ? activeColor : color}/>
            <path d="M33.139 38.9668H9.9151C8.35552 39.1018 6.7881 38.8197 5.37345 38.1495C3.95881 37.4792 2.74781 36.4448 1.86456 35.1524C1.16174 33.7525 0.844553 32.1906 0.94562 30.6274C1.04669 29.0643 1.56236 27.5562 2.4396 26.2585L14.0554 5.36543C15.9722 1.9152 18.6173 0.0175781 21.5309 0.0175781C24.4444 0.0175781 27.0896 1.9152 29.0064 5.36543L40.6221 26.2777C41.5033 27.5738 42.0214 29.0822 42.1225 30.6462C42.2237 32.2102 41.9041 33.7728 41.1972 35.1716C40.3087 36.4594 39.0951 37.4889 37.6797 38.1555C36.2643 38.8222 34.6976 39.1021 33.139 38.9668ZM21.5232 2.89277C19.7214 2.89277 17.958 4.27286 16.5587 6.76469L4.9621 27.6769C4.34494 28.5437 3.96387 29.5561 3.85633 30.6147C3.74879 31.6733 3.91848 32.7416 4.34873 33.7148C4.98742 34.5675 5.83874 35.2375 6.81758 35.658C7.79642 36.0784 8.86849 36.2346 9.9266 36.1108H33.1581C34.2161 36.2324 35.2874 36.0753 36.2659 35.655C37.2443 35.2347 38.0959 34.5658 38.736 33.7148C39.1714 32.7428 39.3439 31.6735 39.2363 30.6139C39.1286 29.5543 38.7446 28.5415 38.1226 27.6769L26.4877 6.76469C25.0884 4.27286 23.3327 2.89277 21.5232 2.89277Z" fill={isActive ? activeColor : color}/>
            </svg>

        </div>
    )
}

export default IconWarning;