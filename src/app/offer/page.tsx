"use client"
import Image from "next/image"
import swal from "sweetalert"
const OfferPage = () => {
    const offerHandler = () => {
        swal({
            title: "Offer acheived",
            icon: "success"
        })
    }
    return (
        <main className="h-screen">
            <div className=" w-full h-full px-5 bg-slate-500">

                <Image src={"https://i.ibb.co.com/8g9Y7X6J/offer-image.png"} alt="offer" width={10000} height={10000} className=" w-full h-full object-contain" />

            </div>
            <div className=" absolute bottom-0 left-0 right-0 flex items-center justify-center h-2/6 bg-slate-300">
                <button onClick={offerHandler} className=" bg-red-600 w-1/2 py-3 rounded-md shadow-lg text-white hover:scale-105 active:scale-100">
                    Click
                </button>
            </div>
        </main>
    )
}

export default OfferPage
