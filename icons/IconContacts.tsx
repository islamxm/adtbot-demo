import styles from './icon.module.scss';
import { iconType } from './types';


const IconContacts = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6525 13.4712C11.4166 13.4712 11.1861 13.4013 10.99 13.2702L10.2754 12.8012C10.1768 12.7357 10.1013 12.6407 10.0599 12.5297C10.0185 12.4188 10.0131 12.2976 10.0447 12.1834C10.0983 11.9896 10.1234 11.789 10.1191 11.5879V8.55837C10.1401 8.294 10.1034 8.02823 10.0117 7.77939C9.92 7.53055 9.77539 7.30458 9.58787 7.11705C9.40034 6.92953 9.17437 6.78492 8.92553 6.6932C8.6767 6.60149 8.41092 6.56485 8.14655 6.58581H3.09234C3.00302 6.58581 2.92114 6.59326 2.83926 6.6007C2.68381 6.60843 2.53151 6.55499 2.41497 6.45183C2.3575 6.40045 2.3118 6.33728 2.28096 6.26662C2.25013 6.19597 2.23491 6.1195 2.23633 6.04243V3.98055C2.21389 3.48583 2.2948 2.99186 2.4739 2.53015C2.653 2.06845 2.92636 1.64913 3.27654 1.29895C3.62672 0.948774 4.04603 0.675418 4.50774 0.496317C4.96945 0.317217 5.46341 0.236305 5.95813 0.258741H12.2852C12.7799 0.236305 13.2739 0.317217 13.7356 0.496317C14.1973 0.675418 14.6166 0.948774 14.9668 1.29895C15.317 1.64913 15.5903 2.06845 15.7694 2.53015C15.9485 2.99186 16.0294 3.48583 16.007 3.98055V7.77679C16.0232 8.27115 15.94 8.76373 15.7623 9.22532C15.5845 9.68691 15.3159 10.1081 14.9723 10.4639C14.3956 11.027 13.6453 11.3786 12.8435 11.4614V12.2876C12.8436 12.5046 12.7848 12.7175 12.6733 12.9036C12.5619 13.0898 12.402 13.2422 12.2108 13.3446C12.0358 13.4261 11.8455 13.4692 11.6525 13.4712ZM11.2059 12.0718L11.6897 12.3472C11.7028 12.3415 11.714 12.3321 11.7219 12.3202C11.7298 12.3084 11.7341 12.2944 11.7344 12.2802V10.9329C11.7354 10.7851 11.7945 10.6437 11.899 10.5392C12.0035 10.4347 12.1449 10.3756 12.2926 10.3746C12.6403 10.3899 12.9874 10.3352 13.3135 10.2137C13.6396 10.0922 13.9379 9.90648 14.1908 9.66747C14.4306 9.41518 14.6169 9.11694 14.7385 8.79073C14.86 8.46452 14.9142 8.11708 14.8979 7.76935V3.9731C14.9227 3.62461 14.8723 3.27486 14.7501 2.94754C14.6279 2.62022 14.4369 2.32298 14.1898 2.07593C13.9428 1.82889 13.6455 1.63781 13.3182 1.51564C12.9909 1.39348 12.6411 1.34307 12.2926 1.36784H5.96558C5.61708 1.34307 5.26733 1.39348 4.94001 1.51564C4.61269 1.63781 4.31545 1.82889 4.0684 2.07593C3.82136 2.32298 3.63028 2.62022 3.50812 2.94754C3.38595 3.27486 3.33554 3.62461 3.36031 3.9731V5.46183H8.154C8.56462 5.4432 8.97461 5.51035 9.35783 5.659C9.74105 5.80766 10.0891 6.03454 10.3797 6.32519C10.6704 6.61584 10.8973 6.96387 11.0459 7.34709C11.1946 7.73031 11.2617 8.14031 11.2431 8.55093V11.5805C11.2357 11.7517 11.2282 11.9154 11.2059 12.0718Z" fill={isActive ? activeColor : color}/>
            <path d="M11.6525 13.4712C11.4166 13.4712 11.1861 13.4013 10.99 13.2702L10.2754 12.8012C10.1768 12.7357 10.1013 12.6407 10.0599 12.5297C10.0185 12.4188 10.0131 12.2976 10.0447 12.1834C10.0983 11.9896 10.1234 11.789 10.1191 11.5879V8.55837C10.1401 8.294 10.1034 8.02823 10.0117 7.77939C9.92 7.53055 9.77539 7.30458 9.58787 7.11705C9.40034 6.92953 9.17437 6.78492 8.92553 6.6932C8.6767 6.60149 8.41092 6.56485 8.14655 6.58581H3.09234C3.00302 6.58581 2.92114 6.59326 2.83926 6.6007C2.68381 6.60843 2.53151 6.55499 2.41497 6.45183C2.3575 6.40045 2.3118 6.33728 2.28096 6.26662C2.25013 6.19597 2.23491 6.1195 2.23633 6.04243V3.98055C2.21389 3.48583 2.2948 2.99186 2.4739 2.53015C2.653 2.06845 2.92636 1.64913 3.27654 1.29895C3.62672 0.948774 4.04603 0.675418 4.50774 0.496317C4.96945 0.317217 5.46341 0.236305 5.95813 0.258741H12.2852C12.7799 0.236305 13.2739 0.317217 13.7356 0.496317C14.1973 0.675418 14.6166 0.948774 14.9668 1.29895C15.317 1.64913 15.5903 2.06845 15.7694 2.53015C15.9485 2.99186 16.0294 3.48583 16.007 3.98055V7.77679C16.0232 8.27115 15.94 8.76373 15.7623 9.22532C15.5845 9.68691 15.3159 10.1081 14.9723 10.4639C14.3956 11.027 13.6453 11.3786 12.8435 11.4614V12.2876C12.8436 12.5046 12.7848 12.7175 12.6733 12.9036C12.5619 13.0898 12.402 13.2422 12.2108 13.3446C12.0358 13.4261 11.8455 13.4692 11.6525 13.4712ZM11.2059 12.0718L11.6897 12.3472C11.7028 12.3415 11.714 12.3321 11.7219 12.3202C11.7298 12.3084 11.7341 12.2944 11.7344 12.2802V10.9329C11.7354 10.7851 11.7945 10.6437 11.899 10.5392C12.0035 10.4347 12.1449 10.3756 12.2926 10.3746C12.6403 10.3899 12.9874 10.3352 13.3135 10.2137C13.6396 10.0922 13.9379 9.90648 14.1908 9.66747C14.4306 9.41518 14.6169 9.11694 14.7385 8.79073C14.86 8.46452 14.9142 8.11708 14.8979 7.76935V3.9731C14.9227 3.62461 14.8723 3.27486 14.7501 2.94754C14.6279 2.62022 14.4369 2.32298 14.1898 2.07593C13.9428 1.82889 13.6455 1.63781 13.3182 1.51564C12.9909 1.39348 12.6411 1.34307 12.2926 1.36784H5.96558C5.61708 1.34307 5.26733 1.39348 4.94001 1.51564C4.61269 1.63781 4.31545 1.82889 4.0684 2.07593C3.82136 2.32298 3.63028 2.62022 3.50812 2.94754C3.38595 3.27486 3.33554 3.62461 3.36031 3.9731V5.46183H8.154C8.56462 5.4432 8.97461 5.51035 9.35783 5.659C9.74105 5.80766 10.0891 6.03454 10.3797 6.32519C10.6704 6.61584 10.8973 6.96387 11.0459 7.34709C11.1946 7.73031 11.2617 8.14031 11.2431 8.55093V11.5805C11.2357 11.7517 11.2282 11.9154 11.2059 12.0718Z" fill={isActive ? activeColor : color}/>
            <path d="M3.59099 16.2551C3.45136 16.2558 3.31298 16.2287 3.18394 16.1753C3.05489 16.122 2.93776 16.0435 2.83937 15.9444C2.74099 15.8453 2.66331 15.7276 2.61088 15.5982C2.55845 15.4688 2.53231 15.3302 2.534 15.1906V14.6249C1.90636 14.5377 1.32257 14.2536 0.866626 13.8136C0.580793 13.5179 0.357116 13.168 0.208811 12.7844C0.0605053 12.4009 -0.0094197 11.9915 0.00316722 11.5805V8.55092C-0.0324991 7.78218 0.234193 7.03002 0.746156 6.45546C1.25812 5.88089 1.97467 5.52957 2.74242 5.47671C2.86151 5.46926 2.97317 5.46182 3.09227 5.46182H8.14648C8.5571 5.44319 8.96709 5.51035 9.35031 5.659C9.73353 5.80765 10.0816 6.03454 10.3722 6.32519C10.6629 6.61584 10.8897 6.96387 11.0384 7.34709C11.1871 7.73031 11.2542 8.1403 11.2356 8.55092V11.5805C11.2397 11.8873 11.1996 12.1932 11.1165 12.4886C10.9525 13.1409 10.5662 13.7156 10.0241 14.1137C9.48195 14.5118 8.81796 14.7084 8.14648 14.6696H6.29302L4.18648 16.069C4.01214 16.1914 3.804 16.2564 3.59099 16.2551ZM3.09227 6.57836C3.00294 6.57836 2.92106 6.58581 2.83918 6.59325C2.59595 6.60369 2.35734 6.66328 2.13775 6.76841C1.91816 6.87353 1.72212 7.02203 1.56146 7.20495C1.40079 7.38788 1.27883 7.60143 1.20291 7.83275C1.12699 8.06407 1.09869 8.30837 1.11971 8.55092V11.5805C1.10833 11.8447 1.14988 12.1086 1.24192 12.3566C1.33395 12.6046 1.47462 12.8317 1.65565 13.0245C1.8481 13.2035 2.07423 13.3424 2.32086 13.4331C2.5675 13.5238 2.82972 13.5646 3.09227 13.553C3.24003 13.554 3.38146 13.6131 3.48595 13.7176C3.59043 13.8221 3.64956 13.9635 3.65054 14.1113V15.0864L5.80919 13.6498C5.9018 13.5879 6.01042 13.5543 6.12182 13.553H8.14648C8.57147 13.5902 8.99572 13.474 9.34249 13.2255C9.68927 12.977 9.93568 12.6127 10.0372 12.1983C10.0924 11.997 10.1199 11.7892 10.119 11.5805V8.55092C10.14 8.28655 10.1034 8.02078 10.0116 7.77194C9.91993 7.52311 9.77532 7.29713 9.5878 7.1096C9.40027 6.92208 9.17429 6.77747 8.92546 6.68575C8.67662 6.59404 8.41085 6.5574 8.14648 6.57836H3.09227Z" fill={isActive ? activeColor : color}/>
            <path d="M3.59099 16.2551C3.45136 16.2558 3.31298 16.2287 3.18394 16.1753C3.05489 16.122 2.93776 16.0435 2.83937 15.9444C2.74099 15.8453 2.66331 15.7276 2.61088 15.5982C2.55845 15.4688 2.53231 15.3302 2.534 15.1906V14.6249C1.90636 14.5377 1.32257 14.2536 0.866626 13.8136C0.580793 13.5179 0.357116 13.168 0.208811 12.7844C0.0605053 12.4009 -0.0094197 11.9915 0.00316722 11.5805V8.55092C-0.0324991 7.78218 0.234193 7.03002 0.746156 6.45546C1.25812 5.88089 1.97467 5.52957 2.74242 5.47671C2.86151 5.46926 2.97317 5.46182 3.09227 5.46182H8.14648C8.5571 5.44319 8.96709 5.51035 9.35031 5.659C9.73353 5.80765 10.0816 6.03454 10.3722 6.32519C10.6629 6.61584 10.8897 6.96387 11.0384 7.34709C11.1871 7.73031 11.2542 8.1403 11.2356 8.55092V11.5805C11.2397 11.8873 11.1996 12.1932 11.1165 12.4886C10.9525 13.1409 10.5662 13.7156 10.0241 14.1137C9.48195 14.5118 8.81796 14.7084 8.14648 14.6696H6.29302L4.18648 16.069C4.01214 16.1914 3.804 16.2564 3.59099 16.2551ZM3.09227 6.57836C3.00294 6.57836 2.92106 6.58581 2.83918 6.59325C2.59595 6.60369 2.35734 6.66328 2.13775 6.76841C1.91816 6.87353 1.72212 7.02203 1.56146 7.20495C1.40079 7.38788 1.27883 7.60143 1.20291 7.83275C1.12699 8.06407 1.09869 8.30837 1.11971 8.55092V11.5805C1.10833 11.8447 1.14988 12.1086 1.24192 12.3566C1.33395 12.6046 1.47462 12.8317 1.65565 13.0245C1.8481 13.2035 2.07423 13.3424 2.32086 13.4331C2.5675 13.5238 2.82972 13.5646 3.09227 13.553C3.24003 13.554 3.38146 13.6131 3.48595 13.7176C3.59043 13.8221 3.64956 13.9635 3.65054 14.1113V15.0864L5.80919 13.6498C5.9018 13.5879 6.01042 13.5543 6.12182 13.553H8.14648C8.57147 13.5902 8.99572 13.474 9.34249 13.2255C9.68927 12.977 9.93568 12.6127 10.0372 12.1983C10.0924 11.997 10.1199 11.7892 10.119 11.5805V8.55092C10.14 8.28655 10.1034 8.02078 10.0116 7.77194C9.91993 7.52311 9.77532 7.29713 9.5878 7.1096C9.40027 6.92208 9.17429 6.77747 8.92546 6.68575C8.67662 6.59404 8.41085 6.5574 8.14648 6.57836H3.09227Z" fill={isActive ? activeColor : color}/>
            </svg>

        </div>
    )
}

export default IconContacts;