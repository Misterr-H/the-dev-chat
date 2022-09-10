const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="/logo.png" className="h-20 w-20" />
            <h1 className="font-bold">The Dev Chat</h1>
            <div className="mt-5">
                <h1>Username:</h1>
                <input name="username" placeholder="Username" className="p-1 border-2 border-black rounded-lg"/>
            </div>

            <div className="mt-5">
                <h1>Name:</h1>
                <input name="name" placeholder="Name" className="p-1 border-2 border-black rounded-lg"/>
            </div>

            <div className="mt-5">
                <h1>Password:</h1>
                <input name="password" type={'password'} placeholder="Password" className="p-1 border-2 border-black rounded-lg"/>
            </div>
            <button className="bg-primary text-white py-2 w-40 rounded-full mt-5 hover:bg-[#0960ac] duration-200">Register</button>
       </div>
    )
}

export default Register;