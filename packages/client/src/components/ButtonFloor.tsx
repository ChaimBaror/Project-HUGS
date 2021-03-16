import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonFloor = () => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            // position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            boxShadow:"0px 0px 20px rgb(0 0 0 / 10%)"
        }}>

            <NavLink to={"/"}><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1L7 13V20L11.32 15.7" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 9L25 1L20.2 21L1 9Z" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </NavLink>

            <NavLink to={"/Member"} ><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0909 24.9999H25V15.3999C25 14.5938 24.556 13.8541 23.8448 13.4745L19.4735 11.129" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M14.175 11.1367L11.6113 12.5036" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M16.8181 11.9091C14.1072 11.9091 11.9091 9.71091 11.9091 7V5.90909C11.9091 3.19818 14.1072 1 16.8181 1C19.5291 1 21.7272 3.19818 21.7272 5.90909V7C21.7272 9.71091 19.5291 11.9091 16.8181 11.9091Z" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
                <path d="M4.91855 18.6674L2.20545 20.0343C1.46691 20.403 1 21.159 1 21.9848V25.0001H14.0909V21.9848C14.0909 21.1579 13.624 20.403 12.8844 20.0332L10.1713 18.6663" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M7.5454 19.5455C5.13558 19.5455 3.18176 17.5917 3.18176 15.1818V14.0909C3.18176 11.6811 5.13558 9.72729 7.5454 9.72729C9.95522 9.72729 11.909 11.6811 11.909 14.0909V15.1818C11.909 17.5917 9.95522 19.5455 7.5454 19.5455Z" stroke="#B2BAC9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
            </svg>
            </NavLink>


            <NavLink to={"/"}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#F76940" />
                    <path d="M34.2378 36.3868C32.6872 38.0213 29.458 40.5915 26.6182 42.1847C24.2104 40.1883 22.2856 38.2043 21.1216 36.4432C18.2611 32.1188 18.2012 27.3854 21.5047 24.7024C23.0002 23.4861 24.4917 23 26.2927 23C28.2781 23 31.0995 24.6419 32.2511 25.66C33.4027 24.6419 35.6921 23.1064 37.6775 23.1064C39.4785 23.1064 40.5063 23.51 42.0032 24.7263C45.3053 27.4092 45.9644 32.5077 43.1039 36.832C41.1488 39.7902 36.2494 44.3636 31.9842 46.9199" stroke="white" stroke-width="3.21844" stroke-linecap="round" />
                    <path d="M39.8554 38.1675V44.4873" stroke="#F76940" stroke-width="8.0461" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M43.0155 41.3274H36.6957" stroke="#F76940" stroke-width="8.0461" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M39.8554 38.1675V44.4873" stroke="white" stroke-width="2.41383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M39.8554 38.1675V44.4873" stroke="url(#paint0_linear)" stroke-width="2.41383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M43.0155 41.3274H36.6957" stroke="white" stroke-width="2.41383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M43.0155 41.3274H36.6957" stroke="url(#paint1_linear)" stroke-width="2.41383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="40.3554" y1="38.1675" x2="40.3554" y2="44.4873" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="39.8556" y1="41.3274" x2="39.8556" y2="42.3274" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg> 
                </NavLink>
          
            <NavLink to={"/condition"}><svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5088 14.6C4.15699 15.2556 3.01714 16.2787 2.21974 17.552C1.42234 18.8254 0.999629 20.2976 1 21.8V21.8C1 21.8 4.2 25 11.4 25C18.6 25 21.8 21.8 21.8 21.8C21.8002 20.2974 21.3773 18.8251 20.5796 17.5517C19.7819 16.2784 18.6417 15.2554 17.2896 14.6" stroke="#B2BAC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.0001 6.6C17.0001 9.6928 14.4929 13.8 11.4001 13.8C8.30731 13.8 5.80011 9.6928 5.80011 6.6C5.80011 5.11479 6.39011 3.69041 7.44031 2.6402C8.49052 1.59 9.9149 1 11.4001 1C12.8853 1 14.3097 1.59 15.3599 2.6402C16.4101 3.69041 17.0001 5.11479 17.0001 6.6V6.6Z" stroke="#B2BAC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </NavLink>
            <NavLink to={"/"}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L1.5 9V22H8.5V15H14.5V22H21.5V9L11.5 1Z" stroke="#8462AA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </NavLink>

        </div>
    )

}

export default ButtonFloor;
