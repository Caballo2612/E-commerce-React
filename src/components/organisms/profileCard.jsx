import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import appFireBase from '../../credentials';
import Swal from 'sweetalert2';

const ProfileCard = ({ children, usuario }) => {

    const Auth = getAuth(appFireBase);
        const navigate = useNavigate();
    
        const handleLogout = async () => {
            try {
                const result = await Swal.fire({
                    title: "¿Cerrar sesión?",
                    text: "¿Estás seguro de esta acción?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, cerrar sesión",
                    cancelButtonText: "Cancelar"
                });
    
                if (result.isConfirmed) {
                    await signOut(Auth);
                    await Swal.fire({
                        title: "Sesión cerrada",
                        text: "Hasta pronto!",
                        showConfirmButton: false,
                        icon: "success",
                        timer: 1500
                    });
                    navigate("/");
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "Ocurrió un error al cerrar sesión",
                    icon: "error"
                });
            }
        }

    return (
        <div className='text-[#39393a] bg-[#f9f9f9] z-50 absolute top-12 -right-3 overflow-hidden rounded-[20px] profileCard' onClick={children}>
            <div className='relative flex flex-col p-3 xl:p-6 lg:p-5 md:p-5 z-10 card-content'>
                <div className="flex gap-3 items-center p-3 rounded-xl border border-gray-200 mb-3">
                    <div>
                        <h2 className="m-0 text-[22px]">{usuario ? usuario.name : ' Inicia Sesión!'}</h2>
                        <h3 className='m-0 opacity-70 text-[14px]'>{usuario ? usuario.email : 'Entra en contacto!'}</h3>
                    </div>
                </div>

                <ul className='p-0 m-0 list-none'>
                    <li className='mb-2'>
                        <button className='w-full flex gap-3 items-center p-3 rounded-lg '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="-0.5 0 25 25"><path stroke="#000" d="M19 3.32h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2m-11 0H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2m11 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2m-11 0H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2" /></svg>
                            <span>Integraciones</span>
                        </button>
                    </li>
                    <li className='mb-2'>
                        <button className='w-full flex gap-3 items-center p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="#292d32" d="M16.99 8.96H7.01M12 7.28v1.68m2.5-.02c0 4.3-3.36 7.78-7.5 7.78" /><path stroke="#292d32" d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47" /><path stroke="#292d32" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>
                            <span>Idioma</span>
                        </button>
                    </li>
                    <li>
                        {!usuario 
                        ? 
                        <Link to="/login" className='w-full flex gap-3 items-center p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="#000" d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3m-4-4 4-4m0 0-4-4m4 4H3" /></svg>
                            <span>Iniciar Sesión</span>
                        </Link>
                        :
                        <button onClick={handleLogout} className='w-full flex gap-3 items-center p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="#000" d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3m-4-4 4-4m0 0-4-4m4 4H3" /></svg>
                            <span>Cerrar sesión</span>
                        </button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard