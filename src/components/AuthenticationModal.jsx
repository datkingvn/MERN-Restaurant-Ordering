import React from 'react';
import {CiLogin} from "react-icons/ci";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {useForm} from "react-hook-form";

const AuthenticationModal = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box flex flex-col mt-0">

                    <div className="modal-action mt-0 flex flex-col justify-center">
                        <form className="card-body" method='dialog' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center justify-center'>
                                <CiLogin style={{fontSize: "20px"}}/>
                                <p className='font-semibold text-lg ml-2'><span
                                    className='text-green'>DatFood</span> xin chào!</p>
                                <img src="/images/gif/tho_con.gif" alt="logo"/>
                            </div>

                            {/*Email*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email (*)</span>
                                </label>
                                <input type="email" placeholder="Email"
                                       className="input input-bordered" {...register("email")} />
                            </div>

                            {/*Password*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password (*)</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered"
                                       {...register("password")} />
                                <label className="label mt-1">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/*Message Error*/}


                            {/*Button*/}
                            <div className="form-control mt-6">
                                <input type='submit' value='Đăng Nhập' className="btn bg-green uppercase text-white">
                                </input>
                            </div>

                            <p className='text-center my-2 '>Chưa có tài khoản? <Link
                                className='text-red ml-1 underline' to='/signup'>Đăng ký ngay</Link>
                            </p>

                            {/*Close Button*/}
                            <button
                                htmlFor='my_modal_5'
                                onClick={() => document.getElementById('my_modal_5').close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>

                        {/*Social Media Login*/}
                        <div className='flex justify-center items-center gap-4 pb-3'>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FcGoogle style={{fontSize: "25px"}}/>
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaFacebook style={{fontSize: "25px"}}/>
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaGithub style={{fontSize: "25px"}}/>
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AuthenticationModal;
