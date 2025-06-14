import React from 'react'
import { ContactUs } from './Contact form/ContactUs'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="flex justify-around bg-slate-50 max-w-full max-h-full my-0 animate-slideUp flex-wrap-reverse dark:bg-slate-900">
      <div className='flex-col justify-center items-center py-3 px-4 sm:py-24 lg:px-24 dark:text-slate-200 '>
         <div className='lg:text-5xl text-2xl font-bold font-roboto lg:mt-6  mx-[20px]'>Contact</div>
         <div className='text-sm font-roboto font-extralight mb-[10px]  lg:my-4 mx-6 '>Looking forward to hearing from you</div>
         <div className='lg:text-2xl text-lg font-semibold font-roboto mt-2 lg:mt-8 mx-6 '> Email </div>
         <div className='text-sm font-roboto font-extralight  mb-[10px] lg:my-4 mx-6 '>akanshajadon51@gmail.com </div>

         <div className="flex-row ">
        <div className=" lg:text-2xl text-lg  ml-[23px] font-semibold font-roboto mt-2 lg:mt-7 ">
          Connect On
        </div>

        <div className="flex lg:mt-4 lg:space-x-6 space-x-4  my-[10px]  ml-[25px]  mb-6">
          <a href="https://www.linkedin.com/in/taruntiwari08/" className="text-gray-500 hover:text-gray-900">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M1.5 0C.67 0 0 .67 0 1.5V22.5C0 23.33.67 24 1.5 24H22.5C23.33 24 24 23.33 24 22.5V1.5C24 .67 23.33 0 22.5 0H1.5ZM7.03 20.48H3.53V9H7.03V20.48ZM5.28 7.52C4.12 7.52 3.2 6.6 3.2 5.43C3.2 4.26 4.12 3.34 5.28 3.34C6.44 3.34 7.36 4.26 7.36 5.43C7.36 6.6 6.44 7.52 5.28 7.52ZM20.5 20.48H17V14.25C17 13.17 16.98 11.78 15.53 11.78C14.04 11.78 13.8 12.91 13.8 14.17V20.48H10.3V9H13.6V10.39H13.64C14.13 9.57 15.21 8.68 16.8 8.68C19.87 8.68 20.5 10.75 20.5 13.52V20.48Z" />
            </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>

          <a href="https://discord.com/users/877954303304794163" className="text-gray-500 hover:text-gray-900">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="https://x.com/tarunt_" className="text-gray-500 hover:text-gray-900">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="https://github.com/taruntiwari08" className="text-gray-500 hover:text-gray-900">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
        
        </div>

      </div>


        

    <div className='flex justify-center items-center py-8 px-8 lg:py-24 lg:px-24'>
      <ContactUs/>
    </div>
    </div>
  )
}

export default Contact