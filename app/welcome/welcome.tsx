import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { LoginModal } from "../componennts/login";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Welcome() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  }
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  }

  return (
    <>
    <div className="bg-gray-50">
      <nav className=" justify-between bg-white w-full p-4 border-b border-gray-100 text-black h-16 fixed top-0 left-0 z-10">
        <div className="flex w-[60%] mx-auto justify-between items-center">
          <img src="/sachso_logo.ea7f2393.png" alt="logo" className="w-30 h-10" />
          <button 
            onClick={openLoginModal}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Đăng nhập
          </button>
          <Link to="/signup">Trang chủ</Link>
          <Link to="/dashboard">Phương Nam</Link>
          <Link to="/dashboard">Đăng ký học sinh</Link>
        </div>

      </nav>
       
       <div className="flex w-[80%] mx-auto justify-center items-center pt-16 ">
           <div className="grid grid-cols-2 gap-8 w-full">
             <div className="flex justify-center items-center">
                  <img src="/sachso_logo.ea7f2393.png" alt="logo" className="w-64 h-32 object-contain" />
             </div>
             <div className=" items-center pt-12">
              <h1 className="text-4xl font-bold text-blue-700">SÁCH GIÁO KHOA TIẾNG ANH
              </h1>
               <p className="  text-gray-800">Áp dụng phương pháp học tập khoa học mới hệ thống học trực tuyến thông minh, ứng dụng công nghệ 4.0 với trí tuệ nhân tạo. Việc áp dụng phương pháp mới này không những mang lại hiệu quả cao, tiết kiệm thời gian mà còn mang đến tính sáng tạo, tư duy độc lập, sự tìm tòi, nghiên cứu của học sinh.</p>
             </div>
             
           </div>

       </div>
       <div className="w-[80%] mx-auto justify-center items-center bg-gray-50 pt-16">
          <div className="text-blue-400 font-bold text-2xl mb-4 text-center">Tính năng nổi bật</div>
          <div className="grid grid-cols-3 gap-8 w-full">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative pt-20 mt-8 border-2 border-gray-200">
              <div className="flex justify-center mb-4 border-radius-full  absolute left-1/2 transform -translate-x-1/2 -top-8">
                <img src="/ai.57721735.svg" alt="AI icon" className="w-20 h-20" />
              </div>

              <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Tính năng AI</h2>
              <p className="text-gray-600 text-left">Việc tích hợp hệ thống AI chấm điểm giúp hạn chế việc lấy đi một khoảng thời gian đáng kể trong khi thời gian đó có thể được sử dụng để trao đổi với học sinh, chuẩn bị trang bị lớp học hay các công việc khác phục vụ thiết yếu phục vụ cho công tác dạy và học.</p>
     
              </div>
                    {/* thẻ label */}
            
              <div className="flex mt-4">
                  <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                    Các bài tập trắc nghiệm
                  </div>
                  <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                    Luyện tập với AI
                  </div>  
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative pt-20 mt-8 border-2 border-gray-200">
              <div className="flex justify-center mb-4 border-radius-full absolute left-1/2 transform -translate-x-1/2 -top-8">
                <img src="/anh2.png" alt="" className="w-20 h-20" />
              </div>
              
              <div>
              <h2 className="text-xl font-semibold mb-2">Giáo viên quản lý học sinh</h2>
              <p className="text-gray-600 text-left">Xây dựng hệ thống quản lý lớp học từ xa. Là nơi giáo viên có thể chủ động theo dõi việc học và làm bài của học sinh từ đó giúp giáo viên có thể quản lý lớp một cách bao quát hơn. Bên cạnh đó luôn đòi hỏi học sinh làm việc khẩn trương theo đúng lộ trình giáo viên đã đặt ra.</p>
              </div>
                 
                 {/* thẻ label */}
            
              <div className="flex mt-4">
                <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                  Quản lý học sinh
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                  Quản lý lớp học
                </div>  
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative pt-20 mt-8 border-2 border-gray-200">
              <div className="flex justify-center mb-4 border-radius-full absolute left-1/2 transform -translate-x-1/2 -top-8">
                <img src="/phuhuynh.png" alt="" className="w-20 h-20" />
              </div>
              <div>
              <h2 className="text-xl font-semibold mb-2">Tính năng Premium</h2>
              <p className="text-gray-600 text-left">Nhu cầu theo dõi việc học tập của con cái đối với phụ huynh là một nhu cầu hàng đầu. Hệ thống được xây dựng với mục đích đáp ứng nhu cầu trên và tạo sự kết nối chặt chẽ hơn giữa phụ huynh học sinh với nhà trường để kịp thời nắm bắt và theo dõi.</p>
              </div>
              
               {/* thẻ label */}
            
               <div className="flex mt-4">
                <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                  Quản lý học sinh
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-xs mx-2">
                  Quản lý lớp học
                </div>  
              </div>
            
            
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 w-full p-16">
            <div className="bg-white p-6 rounded-lg text-center  ">
              <img src="/Piramid.3db44542.png" alt="" />

            </div>
            <div className="bg-blue-700 text-white rounded-bl-3xl rounded-tl-3xl p-12">
              <h1 className="text-4xl font-bold">Phương pháp học tiếng anh dựa theo "Tháp học tập"</h1>
              <p className="text-left mt-4">
              Hệ thống bài học được thiết kế công phu, khoa học và hấp dẫn, giúp học viên học sâu qua các chủ đề giao tiếp thông dụng
              </p>
              <p className="text-left mt-4">
              Giúp học viên ghi nhớ lâu những kiến thức được học thông qua trải nghiệm trực tiếp và quá trình lặp đi lặp lại nhiều lần              </p>
              <p className="text-left mt-4">
                
Bằng việc ứng dụng hình ảnh, âm thanh, hành động và cảm xúc vào việc học từ vựng, học viên sẽ ghi nhớ từ vựng lâu hơn, hiệu quả hơn và có hứng thú hơn khi học
              </p>
            </div>

          </div>



          {/* Footer*/}
          <div className="grid grid-cols-3 gap-8 w-full p-16">  
            <div> 
              <img src="nxbgd.png" alt="" className="w-80 h-20"/>
            </div>
            <div >
              <h1>Liên hệ</h1>
              <p>
                Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM
              </p>
              <p>
                Email: contact@example.com
              </p>
            </div>

            <div> 
              <img src="logofooter.ea7f2393.png" alt="" className="w-80 h-20"/>
            </div>
              

          </div>
      

        {/*Login Modal */}
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={closeLoginModal} 
        />
       </div>
    </div>
    


    

    </>

   
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
