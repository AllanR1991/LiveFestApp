import Svg, { Path } from 'react-native-svg';


export default function ShowIcon({ color, size }) {
    return (
        <>
            <Svg width={size} height={size}  viewBox="0 0 24 19" fill="none">
                <Path
                    d="M23.8999 9.025C21.4767 3.45563 16.9183 0 12 0C7.08171 0 2.5233 3.45563 0.100147 9.025C0.0340939 9.17482 0 9.33653 0 9.5C0 9.66347 0.0340939 9.82518 0.100147 9.975C2.5233 15.5444 7.08171 19 12 19C16.9183 19 21.4767 15.5444 23.8999 9.975C23.9659 9.82518 24 9.66347 24 9.5C24 9.33653 23.9659 9.17482 23.8999 9.025ZM12 16.625C8.19732 16.625 4.59858 13.9056 2.5233 9.5C4.59858 5.09438 8.19732 2.375 12 2.375C15.8027 2.375 19.4014 5.09438 21.4767 9.5C19.4014 13.9056 15.8027 16.625 12 16.625ZM12 4.75C11.051 4.75 10.1233 5.02858 9.33419 5.55052C8.54511 6.07246 7.9301 6.8143 7.56692 7.68225C7.20375 8.5502 7.10873 9.50527 7.29387 10.4267C7.47901 11.3481 7.93601 12.1945 8.60707 12.8588C9.27813 13.5231 10.1331 13.9755 11.0639 14.1587C11.9947 14.342 12.9595 14.2479 13.8362 13.8884C14.713 13.5289 15.4624 12.9201 15.9897 12.139C16.5169 11.3578 16.7983 10.4395 16.7983 9.5C16.7983 8.24022 16.2928 7.03204 15.3929 6.14124C14.4931 5.25044 13.2726 4.75 12 4.75ZM12 11.875C11.5255 11.875 11.0616 11.7357 10.6671 11.4747C10.2726 11.2138 9.96505 10.8428 9.78346 10.4089C9.60187 9.9749 9.55436 9.49736 9.64694 9.03666C9.73951 8.57596 9.96801 8.15277 10.3035 7.82062C10.6391 7.48847 11.0666 7.26227 11.5319 7.17063C11.9973 7.07899 12.4797 7.12603 12.9181 7.30579C13.3565 7.48554 13.7312 7.78995 13.9948 8.18052C14.2585 8.57109 14.3992 9.03027 14.3992 9.5C14.3992 10.1299 14.1464 10.734 13.6965 11.1794C13.2465 11.6248 12.6363 11.875 12 11.875Z" 
                    fill={color} 
                />
            </Svg>
        </>
    );
}
