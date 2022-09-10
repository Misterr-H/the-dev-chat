const UserChip = () => {
    return (
        <div className="flex items-center border-b-2 border-l-2 border-r-2 border-gray-300 rounded-lg">
            <div className="p-2">
                <img src="avatar.png" className="rounded-full h-14 w-14 bg-gray-300"/>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">John Doe</h1>
                <h1 className="text-sm text-gray-500">Hey There</h1>
            </div>
        </div>
    )
}

export default UserChip;