import { useState, useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle animation when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Reset states when modal opens
      setError('');
      setSuccess(false);
      setEmail('');
      setPassword('');
    }
  }, [isOpen]);

  // Handle closing with animation
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      setError('');
      setSuccess(false);
    }, 300); // Wait for animation to complete
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Call Platzi Fake Store API
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login successful:', data);
        
        // Store tokens in localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        
        setSuccess(true);
        
        // Show success for 2 seconds then close
        setTimeout(() => {
          handleClose();
        }, 2000);
        
      } else {
        // Login failed
        setError(data.message || 'Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fill demo credentials
  const fillDemoCredentials = () => {
    setEmail('john@mail.com');
    setPassword('changeme');
    setError('');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose(); // Use animated close
    }
  };

  return (
    <div 
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ease-out ${
        isAnimating ? 'bg-black bg-opacity-20' : 'bg-opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div className={`bg-white rounded-lg w-full max-w-4xl mx-4 relative transition-all duration-300 ease-out transform ${
        isAnimating 
          ? 'scale-100 translate-y-0 opacity-100' 
          : 'scale-95 translate-y-8 opacity-0'
      }`}>
        
        {/* Icon X ở góc phải */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:rotate-90 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
        
        <div className='flex'>
            <div className='w-1/2 pr-8'>

                {/* Header with stagger animation */}
                <div className={`text-center mb-6 transition-all duration-500 ease-out ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '0.1s' }}>
                  <h2 className="text-3xl font-bold text-gray-800">Đăng nhập</h2>
                  <p className="text-gray-600 mt-2">Chào mừng bạn trở lại!</p>
                  
                  {/* Demo credentials info */}
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-700 font-medium">Thông tin demo:</p>
                    <p className="text-xs text-blue-600">Email: john@mail.com</p>
                    <p className="text-xs text-blue-600">Password: changeme</p>
                    <button
                      type="button"
                      onClick={fillDemoCredentials}
                      className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Sử dụng thông tin demo
                    </button>
                  </div>
                </div>

                {/* Form with stagger animation */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-red-700 text-sm">{error}</span>
                    </div>
                  )}

                  {/* Success Message */}
                  {success && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-700 text-sm">Đăng nhập thành công! Đang chuyển hướng...</span>
                    </div>
                  )}

                  <div className={`transition-all duration-500 ease-out ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '0.2s' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Nhập email của bạn"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>

                  <div className={`transition-all duration-500 ease-out ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '0.3s' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '0.4s' }}>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm text-gray-600">Ghi nhớ tôi</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Quên mật khẩu?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || success}
                    className={`w-full text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95 ${
                      success ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                    } ${
                      isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.5s' }}
                  >
                    {success ? (
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Đăng nhập thành công!
                      </div>
                    ) : isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Đang đăng nhập...
                      </div>
                    ) : 'Đăng nhập'}
                  </button>
                </form>

                {/* Footer */}
                <div className={`text-center mt-6 transition-all duration-500 ease-out ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '0.6s' }}>
                  <p className="text-sm text-gray-600">
                    Chưa có tài khoản?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Đăng ký ngay
                    </a>
                  </p>
                </div>
            </div>
            
            {/* Image with slide animation */}
            <div className={`w-1/2 transition-all duration-700 ease-out ${
              isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '0.3s' }}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="login.png" 
                  alt="" 
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
                />
              </div>
            </div>

        </div>
        </div>
      </div>
    </div>
  );
}