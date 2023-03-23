import { useRef, useEffect, useState } from "react";
import Input from "../components/Input.js";
import { useNavigate, useLocation } from "react-router-dom"

import { AiFillFacebook } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth.js";
function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const ref = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const enable = username.length > 0 && password.length > 0;
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setUser({ username }))
        navigate(location.state?.return_url || '/', { replace: true })
    }

    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0
        const imageSlider = () => {
            if (current > 0) {
                images[current - 1].classList.add('opacity-0')
            } else {
                images[total - 1].classList.add('opacity-0')
            }
            images[current].classList.remove('opacity-0')
            if (current === total - 1) {
                current = 0
            } else {
                current += 1
            }
        }
        imageSlider()
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])

    return (
        <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">

            <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref} >
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
                        alt="" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
                        alt="" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
                        alt="" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
                        alt="" />
                </div>
            </div>
            <div className="w-[350px] grid gap-y-3">

                <div className="bg-white border px-[40px] pt-10 pb-6">
                    <a href="#" className="flex justify-center mb-8">
                        <img className="h-[51px]"
                            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" />
                    </a>

                    <form onSubmit={handleSubmit} className="grid gap-y-1.5">
                        <Input type="text" value={username} onChange={e => setUsername(e.target.value)}
                            label="Phone number, username or email" />
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
                        <button type="submit" disabled={!enable}
                            className="h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">Giriş Yap
                        </button>
                        <div className="flex items-center my-2.5 mb-3.5">
                            <div className="h-px bg-gray-300 flex-1" />
                            <span className="px-4 text-[13px] text-gray-500 font-semibold">Yada</span>
                            <div className="h-px bg-gray-300 flex-1" />
                        </div>
                        <a href="#" className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
                            <AiFillFacebook size={20} />
                            Facebook İle Giriş Yap
                        </a>
                        <a href="#" className="text-xs flex items-center justify-center text-link">
                            Şifreni mi unuttun?
                        </a>
                    </form>
                </div>

                <div className="bg-white border p-4 text-sm text-center">
                    Hesabın Yok Mu?    <a href="#" className="font-semibold text-brand">Üye Ol</a>
                </div>

            </div>

        </div>
    );
}

export default Login;