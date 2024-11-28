import React from 'react'
import appStore from "../assets/banner-images/appstore.png";


const AppDownload = () => {
    return (
        <div className='app-download mt-20 text-center text-3xl font-bold mb-20'  id="app-download">
            <p> For Better Experience Download<br />Tomato App</p>
            <div class="flex justify-center items-center mt-8 space-x-4">
                {/* <!-- Play Store Download --> */}
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" class="transform transition-transform hover:scale-105 hover:shadow-lg"        >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        class="w-24 md:w-28 lg:w-32 h-auto"/>
                </a>
                {/* <!-- App Store Download --> */}
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" class="transform transition-transform hover:scale-105 hover:shadow-lg">
                    <img src={appStore}
                        alt="Download on the App Store"
                        class="w-24 md:w-28 lg:w-32 h-auto"/>
                </a>
            </div>

        </div>
    )
}

export default AppDownload
