"use client"
import styles from "./BannerSlider.module.css";
import "./banner.css";
import banner from "../../../assets/images/banner.jpg"
import banner1 from "../../../assets/images/banner1.jpg"
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

export default function BannerSlider() {

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section className={`${styles.bannerSliderSection} bannerSection`}>
            <Slider {...settings}>
                <div className={styles.bannerContent}>
                    <Image src={banner} alt="banner" />
                    <div className={`${styles.content}`}>
                        <div className="container">
                            <span className={styles.off}>50% Off</span>
                            <h1 className={styles.title}>New Cocktail Dresses</h1>
                            <Link className={styles.btn} href={"shop"}>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bannerContent}>
                    <Image src={banner1} alt="banner" />
                    <div className={`${styles.content} text-right`}>
                        <div className="container">
                            <span className={styles.off}>80% Off</span>
                            <h1 className={`${styles.title} ml-auto`}>The Weekend Promotions</h1>
                            <Link className={styles.btn} href={"shop"}>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </Slider>

        </section>
    )
}
