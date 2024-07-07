/* eslint-disable react/prop-types */
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { FcGoogle } from "react-icons/fc";
import logo from '../assets/images/logo.svg';
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


export default function SignInModal({ show, onClose, onOpenSignUp }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Modal show={show} size="md" onClose={onClose} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl text-center uppercase font-black text-gray-900 dark:text-white">Đăng nhập</h3>
                            <div className="flex justify-center items-center mt-2">
                                <p className="text-gray-500 mr-2">Vào</p>
                                <img src={logo} alt="logo" className='mr-1 h-10 rounded-full object-contain' />
                                <span className="text-xl font-bold">MXC</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="your_email@gmail.com"
                                required
                                icon={HiMail}
                            />
                        </div>

                        <div className="relative">
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Mật khẩu" />
                            </div>
                            <TextInput id="password" placeholder="**********" type={showPassword ? 'text' : 'password'} required />
                                <div className="absolute md:bottom-2.5 bottom-2 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <AiFillEye
                                            className="cursor-pointer text-2xl md:text-lg"

                                        />
                                    ) : (
                                        <AiFillEyeInvisible
                                            className="cursor-pointer text-2xl md:text-lg"
                                        />
                                    )}
                                </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <Button gradientDuoTone='purpleToBlue' outline className="capitalize w-full">Đăng nhập</Button>
                        </div>

                        <div className="flex justify-center">
                            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Quên mật khẩu ?
                            </a>
                        </div>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-300">hoặc</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Button className="w-full capitalize" color="gray" gradientDuoTone="tealToLime" >
                                <FcGoogle className="mr-2 self-center text-xl " />
                                Đăng nhập bằng Google
                            </Button>
                        </div>

                        <div className="flex flex-col items-center text-sm font-medium text-gray-500 dark:text-gray-300">
                            <p>Bạn chưa có tài khoản ?</p>
                            <div className="text-cyan-700 hover:underline dark:text-cyan-500 capitalize cursor-pointer" onClick={onOpenSignUp}>
                                Đăng ký
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
