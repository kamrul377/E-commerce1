import React, { useContext, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button'
import toast, { Toaster } from 'react-hot-toast';
import { useCartContext } from '../context/cartContext';
import BasicModal from '../helpers/BasicModal';




const AddToCart = ({ product }) => {

    const { addToCart } = useCartContext()
    const { id, stock, colors } = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)
    const audio1 = new Audio('/audio/audio1.mp3')
    const audio2 = new Audio('/audio/audio2.mp3');

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const setIncrement = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
        if (amount === stock) {
            toast.error("products stock out")
            audio2.play()
        }
    }
    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
        if (amount <= 1) {
            toast.error('quantity minimum single item')
            audio2.play()
        }
    }


    const addProduct = () => {
        addToCart(id, color, amount, product);
        toast.success('Product added');
        handleOpen(true)
        audio1.play()
    }

    return (
        <div>
            <BasicModal open={open} handleClose={handleClose} />
            <p className='flex items-center gap-3 '>Colors: {colors.map((curColor, index) => {
                return <button title={curColor} key={index} style={{ backgroundColor: curColor }} className={`w-[25px] h-[25px] rounded-full text-center leading-[25px] hover:scale-90 ring-offset-2 ring-purple-950 ${curColor === color ? "ring-2" : null}`} onClick={() => setColor(curColor)}> { }  </button>
            })}</p>

            {/* INCREMENT AND ADD TO CART */}

            <CartAmount amount={amount} setIncrement={setIncrement} setDecrement={setDecrement} />


            <div className="add mt-4 ">
                <NavLink onClick={addProduct} >
                    <Button>add to cart </Button>
                </NavLink>
            </div>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </div>
    )
}

export default AddToCart