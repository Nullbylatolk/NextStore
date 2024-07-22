
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";




const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'



export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    });


    return (
        <section className={styles.Description}>

            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image
                        src="/img/description.jpeg"
                        alt="products marketplace"
                        // width={500} 
                        // height={300}
                        fill
                        priority={true}
                        quality={30}
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>
                    Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
                    cutting-edge gadgets and gear. Stay ahead of the curve and redefine
                    your digital lifestyle with us.
                </p>
            </div>
        </section>
    );
};
