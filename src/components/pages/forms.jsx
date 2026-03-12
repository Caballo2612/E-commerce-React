import { useState } from "react";
import '../../stylesheets/extra.css'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import appFireBase from "../../credentials";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SSOButtons = () => (
    <div className="sso flex gap-4 justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="transition-all hover:drop-shadow-md hover:scale-110 cursor-pointer" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14q.901.013 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="transition-all hover:drop-shadow-md hover:scale-110 cursor-pointer" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="transition-all hover:drop-shadow-md hover:scale-110 cursor-pointer" viewBox="0 0 24 24"><path fill="#ffff" d="m19.76 10.77-.09-.35h-7.44v3.16h4.45a4.45 4.45 0 0 1-4.36 3.34 5.2 5.2 0 0 1-3.5-1.39A5 5 0 0 1 7.33 12a5.14 5.14 0 0 1 1.46-3.53 5 5 0 0 1 3.48-1.37 4.55 4.55 0 0 1 3 1.16L17.47 6a7.88 7.88 0 0 0-5.27-2 8.14 8.14 0 0 0-5.77 2.35 8.15 8.15 0 0 0-.09 11.21 8.37 8.37 0 0 0 6 2.44 7.45 7.45 0 0 0 5.41-2.27 8 8 0 0 0 2.08-5.54 10 10 0 0 0-.07-1.42Z" /></svg>
    </div>
);

const Hero =
    ({ type, active, title, text, buttontext, onClick }) => (
        <div
            className={`hero ${type} ${active ? 'active' : ""}`}
        >
            <SSOButtons />
            <h2>{title}</h2>
            <p>{text}</p>
            <button type="button" onClick={onClick}>
                {buttontext}
            </button>
        </div>
    );

const AuthForm =
    ({ type, active, title, children, text, id, onSubmit }) => (
        <div
            className={`form ${type} ${active ? 'active' : ''} `}
        >
            <h2>{title}</h2>
            <p>{text}</p>
            <form id={id} onSubmit={onSubmit}>{children}</form>
        </div>
    );

const Auth = getAuth(appFireBase)

export const Login = ({ firestore }) => {
    const navigate = useNavigate()

    const [view, setView] = useState('signin');
    const isSignup = view === 'signup';
    const toggleView = () => {
        setView(isSignup ? 'signin' : 'signup');
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        try {
            if (isSignup) {
                const name = e.target.name.value;
                const documento = e.target.documento.value;
                const type_document = e.target.type_document.value;
                
                const userInfo = await createUserWithEmailAndPassword(
                    Auth,
                    email,
                    password
                )

                const docuRef = doc(firestore, `Usuarios/${userInfo.user.uid}`)
                await setDoc(docuRef, {
                    email: email,
                    name: name,
                    documento: documento,
                    document_type: type_document,
                })
                await signOut(Auth);
                await Swal.fire({
                    icon: 'success',
                    title: 'Cuenta creada!',
                    text: `Te has registrado con exito!`,
                });
            } else {
                await signInWithEmailAndPassword(Auth, email, password);
                await Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido de vuelta!',
                    text: 'Has iniciado sesión correctamente!',
                });
                await navigate("/");
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message,
            });
        }
    }

    const [password, setPassword] = useState("");

    const rules = [
        {
            label: "At least 8 characters",
            condition: password.length >= 8
        },
        {
            label: "At least one uppercase letter",
            condition: /[A-Z]/.test(password)
        },
        {
            label: "At least one number",
            condition: /[0-9]/.test(password)
        },
        {
            label: "At least one special character",
            condition: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        }
    ];

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="card">
            <div
                className="card-bg"
                style={{ translate: isSignup ? 0 : "100%" }}
            />

            <Hero
                type="signup"
                active={isSignup}
                title="Welcome to Duro!"
                text="Sign up and discover our exclusive offers!"
                buttontext="Sign In"
                onClick={toggleView}
            />

            <AuthForm
                id="Registerform"
                type="signup"
                active={isSignup}
                title="Sign Up in to DURO!"
                text="Sign up and discover our exclusive offers!"
                onSubmit={handlesubmit}
            >
                <input type="text" name="documento" id="documento" placeholder="Documento" />
                <select name="type_document" id="type_document" className="p-[14px_25px] text-[#6b6b6b] focus:border-black focus:border-2 focus:text-black bg-white rounded-[10px] border border-[#ddd] outline-none hover:cursor-pointer">
                    <option value="" disabled>Select document type</option>
                    <option value="tarjeta">Tarjeta de identidad</option>
                    <option value="cedula">Cedula de ciudadania</option>
                </select>
                <input type="text" name="name" id="name" placeholder="Username" />
                <input type="text" name="email" id="email" placeholder="Email" />
                <div className="flex flex-col gap-2 password-container">
                    <div className="flex items-center relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} />
                        <div
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >{showPassword
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="black" d="M12 16.01a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="black" d="M2 11.98c6.09-10.66 13.91-10.65 20 0m0 .03c-6.09 10.66-13.91 10.65-20 0" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="black" d="M14.83 9.18A4 4 0 0 0 8 12.01a4 4 0 0 0 1.16 2.82M12 16.01a4 4 0 0 0 4-4" /><path stroke="black" d="M17.61 6.39 6.38 17.62A21.8 21.8 0 0 1 2 11.99c4.71-8.23 10.44-10.1 15.61-5.6M21 3l-3.39 3.39M6.38 17.62 3 21M19.57 8.43A25.3 25.3 0 0 1 22 12.01c-4 7-8.73 9.39-13.23 7.22" /></svg>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col p-2 gap-1 bg-white border border-gray-300 rounded">
                        {
                            rules.map((rules, i) => (
                                <span key={i} className={`text-sm ${rules.condition ? 'text-green-500 before:content-["✓"]' : 'before:text-red-500 before:content-["✗"]'} before:mr-1`}>
                                    {rules.label}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <button>Sign Up</button>
            </AuthForm>

            <Hero
                type="signin"
                active={!isSignup}
                title="Welcome Back!"
                text="To keep connected with us please login with your personal info"
                buttontext="Sign Up"
                onClick={toggleView}
            />

            <AuthForm
                id="Loginform"
                type="signin"
                active={!isSignup}
                title="Sign In to DURO!"
                text="To keep connected with us please login with your personal info"
                onSubmit={handlesubmit}
            >
                <input type="text" name="email" id="email" placeholder="Email" />
                <div className="flex items-center relative">
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" />
                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >{showPassword
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="black" d="M12 16.01a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="black" d="M2 11.98c6.09-10.66 13.91-10.65 20 0m0 .03c-6.09 10.66-13.91 10.65-20 0" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="black" d="M14.83 9.18A4 4 0 0 0 8 12.01a4 4 0 0 0 1.16 2.82M12 16.01a4 4 0 0 0 4-4" /><path stroke="black" d="M17.61 6.39 6.38 17.62A21.8 21.8 0 0 1 2 11.99c4.71-8.23 10.44-10.1 15.61-5.6M21 3l-3.39 3.39M6.38 17.62 3 21M19.57 8.43A25.3 25.3 0 0 1 22 12.01c-4 7-8.73 9.39-13.23 7.22" /></svg>
                        }
                    </span>
                </div>
                <a className="cursor-pointer">Forgot password?</a>
                <button>Sign In</button>
            </AuthForm>
        </div>
    );
}
