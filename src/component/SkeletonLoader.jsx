const Loader = () => {  
    return(
        <div className="flex justify-center items-center w-full h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 animate-pulse">
                <div className="h-24 bg-gray-300 rounded-lg mb-4"></div>
                <div className="space-y-4">
                    <div className="h-12 bg-gray-300 rounded-lg"></div>
                    <div className="h-12 bg-gray-300 rounded-lg"></div>
                    <div className="h-12 bg-gray-300 rounded-lg"></div>
                    <div className="h-12 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
