import React from 'react';
import styles from "./header.module.css"

import logo from "../../images/valorant-logo.png"
import { Link, NavLink } from 'react-router-dom';
import { useValoContext } from '../../context/ValoContext';
import { Select } from '@chakra-ui/react';

function Header() {
    const { setLanguage } = useValoContext();

    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <img className={styles.img} src={logo} alt="" />
                </Link>
                <div className={styles.menu}>
                    <ul>
                        <li>

                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : undefined
                                } to="/agents">
                                Agents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : undefined
                                } to="/maps">
                                Maps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : undefined
                                } to="/ranks">
                                Ranks
                            </NavLink>
                        </li>
                    </ul>


                    <Select
                        name="language"
                        onChange={handleLanguage}
                        bg="#fa4454"
                        borderColor="#042e27"
                        width="200px"
                        focusBorderColor="none"
                    >
                        <option value hidden>Select Language</option>
                        <option value="ar-AE">Arabic</option>
                        <option value="de-DE">German</option>
                        <option value="en-US" >English</option>
                        <option value="es-MX">Spanish (Mexico)</option>
                        <option value="es-ES">Spanish (Ecuador)</option>
                        <option value="fr-FR">French</option>
                        <option value="id-ID">Indonesian</option>
                        <option value="it-IT">Italian</option>
                        <option value="ja-JP">Japanese</option>
                        <option value="ko-KR">Korean</option>
                        <option value="pl-PL">Polish</option>
                        <option value="pt-BR">Portuguese (Brazil)</option>
                        <option value="ru-RU">Russian </option>
                        <option value="th-TH">Thai (Thailand)</option>
                        <option value="tr-TR">Turkish</option>
                        <option value="vi-VN">Vietnamese</option>
                        <option value="zh-CN">Chinese (S)</option>
                        <option value="zh-TW">Chinese (T)</option>
                    </Select>

                </div>

            </div>
        </header>
    )
}

export default Header;
