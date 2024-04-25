import React from 'react';
import { useParams } from 'react-router-dom'

function User(props) {
    const {userid} = useParams()
    return (

        <div className='relative flex items-top justify-center sm:items-center pt-10 pb-10'>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://media.licdn.com/dms/image/C4E03AQHrNzH5VzIMsw/profile-displayphoto-shrink_200_200/0/1630262715443?e=2147483647&v=beta&t=6mgu-TZ-JnQz9FK9xkevK4HFDLggYYzhQgQYGyucGgM" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userid}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Developer</span>
                    <div class="flex mt-4 md:mt-6">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                    </div>
                </div>
            </div>    
        </div>

    );
}

export default User;