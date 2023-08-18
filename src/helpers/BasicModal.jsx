// import * as React from 'react';

import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgCloseR } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#d4edda',
    color: '#155724',
    border: '2px solid #c3e6cb',
    borderRadius: '7px',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ open, handleClose }) => {



    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            {/* {props.doId === true ? handleOpen : null} */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex justify-center flex-col relative'>
                        <h1 className='text-center text-xl capitalize font-bold'>product added successfully</h1>


                        <div className="imgage flex w-full justify-center my-5">
                        <img src="/images/check.png" alt="" className='w-32' />
                        </div>

                        <div className="buttons flex gap-6 justify-around my-6 w-full">
                            <NavLink to={'/products'}>
                                <button className='bg-[#155724] px-3 py-1 text-white basis-1/2 rounded shadow hover:bg-green-700 transition-colors text-sm'> Continue Shoping </button>
                            </NavLink>
                            <NavLink to={'/cart'}>
                                <button className='bg-[#155724] px-3 py-1 text-white basis-1/2 rounded shadow hover:bg-green-700 transition-colors text-sm'> Go To Cart </button>
                            </NavLink>
                        </div>




                    </div>
                    <div className="close absolute top-0 right-0">
                        <CgCloseR className='cursor-pointer hover:scale-90 duration-200' onClick={handleClose} size={30} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal