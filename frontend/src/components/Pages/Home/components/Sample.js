const Sample = () => {
    return (
        <div className="flex justify-center py-20">
            <div className="flex w-4/6 ">
                <div className="bg-red-300 w-[150px] h-[300px] flex-grow hover:flex-grow-[4] transition-all duration-500">ONE</div>
                <div className="bg-blue-300 w-[150px] h-[300px] flex-grow hover:flex-grow-[4] transition-all duration-500">TWO</div>
                <div className="bg-green-300 w-[150px] h-[300px] flex-grow hover:flex-grow-[4] transition-all duration-500">THREE</div>
                <div className="bg-gray-300 w-[150px] h-[300px] flex-grow hover:flex-grow-[4] transition-all duration-500">FOUR</div>
            </div>
        </div>
    );
};

export default Sample;
