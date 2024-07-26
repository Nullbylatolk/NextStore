"use client"
import { ShoppingCartItem } from "./ShoppingCartItem";
import { FaShoppingCart } from "react-icons/fa";
import styles from './ShoppingCart.module.sass'
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";

export const ShoppingCart = () => {

    const { cart } = useShoppingCart();
    const [isBuying, setIsBuying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hasItems = cart.length > 0;

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.ShoppingCart}>
            {
                hasItems && (
                    <span className={styles.ShoppingCart__counter}>
                        {cart.length}
                    </span>
                )
            }
            <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
                <FaShoppingCart />
            </button>
            {isOpen && hasItems && (
                <div className={styles.ShoppingCart__items} >
                    {
                        cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
                    }
                    <button className={styles.ShoppingCart__buyButton} disabled={isBuying}>
                        Buy
                    </button>
                </div>
            )}
        </div>
    )
};
