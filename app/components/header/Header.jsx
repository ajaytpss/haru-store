import Link from 'next/link'
import React from 'react'
import styles from "./Header.module.css"
import Logo from "../../../assets/images/logo.svg"
import Image from 'next/image'
import { searchIcon, accountIcon, wishlistIcon, cartIcon } from '@/assets/icons/icon'

export const Header = () => {
    return (
        <header className={styles.headerSection}>

            <div className="container">

                <div className={styles.headerContent}>
                    <div className={styles.headerMenus}>
                        <ul>
                            <li> <Link href={"/categories/men"}> Men</Link></li>
                            <li> <Link href={"/categories/women"}> Women</Link></li>
                            <li> <Link href={"/categories/bags"}> Bags</Link></li>
                            <li> <Link href={"/categories/blogs"}> Blogs</Link></li>
                        </ul>
                    </div>
                    <div className={styles.headerLogo}>
                        <Image src={Logo} height="29" width={128} alt="logo" />
                    </div>
                    <div className={styles.headerIcons}>
                        <ul>
                            <li><Link href="search">{searchIcon}</Link></li>
                            <li><Link href="account">{accountIcon}</Link></li>
                            <li><Link href="wishlist">{wishlistIcon}</Link></li>
                            <li><Link href="cart">{cartIcon}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}
