import iconoCarrito from './assets/carrito-de-compras.png'
import './CartWidget.module.css'

const CartWidget = () => {
    return (
        <>
        <button className='cart'>
            <img src={iconoCarrito} alt="Imagen de un carrito de compras"></img>
            <p>0</p>        
        </button>
        </>
    )
}

export default CartWidget