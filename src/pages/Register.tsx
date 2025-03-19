'use client';
import { Button, Form, Input } from 'antd';
import { Link } from "react-router-dom";

export default function Register() {
  interface FieldTypes {
    fName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [RegisterFormInstance] = Form.useForm();

//   const onFinish: FormProps<FieldTypes>['onFinish'] = async (values) => {
//     const { resData, CODES, status } = await requestAPI(
//       'POST',
//       ENDPOINTS.REGISTER,
//       {},
//       { ...values },
//     );

//     if (status === CODES.SUCCESS) {
//       router.push('/dashboard');
//       RegisterFormInstance.resetFields();
//     }
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center sm:p-6 md:p-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 sm:p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="35.81" height="40" viewBox="0 0 256 286"><path fill="#4285f4" d="M126.936 0a31.94 31.94 0 0 1 15.165 4.126L238.728 58.7a35.7 35.7 0 0 1 10.15 8.581l.096-.057l1.44 2.112l.169.242l1.798 2.65l-.128.077c2.386 4.347 3.699 9.091 3.747 13.917v110.94a31.94 31.94 0 0 1-15.702 27.8l-95.579 56.395a31.8 31.8 0 0 1-12.968 4.256l-.001.142l-6.113.05l.003-.152a32 32 0 0 1-12.846-3.998L11.27 224.309C4.372 220.426.08 213.148 0 205.196V87.707c.057-4.144.779-8.143 2.146-11.821l-.114-.065l2.616-5.467l.148.082a28.44 28.44 0 0 1 9.8-9.62l95.58-56.383A31.9 31.9 0 0 1 126.099 0zM7.5 78.882l-.214.68c-.85 2.815-1.271 5.856-1.239 9.026v116.578a16.1 16.1 0 0 0 8.193 13.876l101.528 57.348a25.9 25.9 0 0 0 9.756 3.173l.211.02l.024-4.932l.02-20.686l-.032-23.482l-.137-.013a20.5 20.5 0 0 1-6.062-1.781l-.714-.353l-.631-.343l-61.507-34.74a14.6 14.6 0 0 1-5.403-5.298a14.65 14.65 0 0 1-2.03-7.318l.001-70.615c-.022-2.247.26-4.437.84-6.502l.197-.66zm239.558-3.473l-42.2 25.203l.093.193c1.042 2.248 1.651 4.641 1.767 7.085l.019.668l-.002 67.2a20.53 20.53 0 0 1-10.098 17.88L138.735 227.8a20.4 20.4 0 0 1-6.442 2.45l-.497.089l.01 4.778l.02 27.678l-.04 16.256l-.006.47l.904-.128a25.7 25.7 0 0 0 8.262-2.845l.7-.398l95.58-56.394a25.9 25.9 0 0 0 9.381-9.563a25.9 25.9 0 0 0 3.344-13.002l.002-110.94c-.034-3.428-.898-6.853-2.496-10.072zM124 86.585c-.914.27-1.794.652-2.615 1.136l-38.813 22.896a10.3 10.3 0 0 0-2.921 2.573q-.47.609-.847 1.274q-.188.335-.356.68l-.209.52a12.6 12.6 0 0 0-.93 3.672q-.069.741-.063 1.5v47.356a7.8 7.8 0 0 0 1.079 3.876a7.74 7.74 0 0 0 2.872 2.814l41.23 23.289a11.7 11.7 0 0 0 5.865 1.516l.44-.017l.003 12.75l.028 12.164l-.03-24.916a11.7 11.7 0 0 0 5.433-1.607l38.813-22.9a11.74 11.74 0 0 0 4.255-4.336c.163-.288.307-.584.445-.886a11.8 11.8 0 0 0 1.072-5l.001-45.06a10.2 10.2 0 0 0-.317-2.408a11 11 0 0 0-.511-1.53a11.6 11.6 0 0 0-.801-1.568l-.177-.284l-.183-.28a13 13 0 0 0-.916-1.19a13.3 13.3 0 0 0-3.486-2.85l-39.239-22.16A11.68 11.68 0 0 0 124 86.585m2.157-80.54A25.86 25.86 0 0 0 113.25 9.64L17.67 66.022a22.36 22.36 0 0 0-7.178 6.739l-.416.635l42.9 24.02l.445-.607a18.4 18.4 0 0 1 4.708-4.321l.564-.346l57.903-34.16a20.52 20.52 0 0 1 20.533-.199l58.539 33.066a22.8 22.8 0 0 1 5.442 4.287l.394.435l42.116-25.154l-.463-.527a29.8 29.8 0 0 0-6.716-5.525l-.687-.402l-96.626-54.572a25.85 25.85 0 0 0-12.97-3.345"/></svg>
              <h1 className="text-3xl font-bold text-gray-900">FormJS</h1>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Please enter your details to sign up</p>
          </div>

          <Form
            name="LoginForm"
            form={RegisterFormInstance}
            layout="vertical"
            // onFinish={onFinish}
            requiredMark={false}
            
          >
            <Form.Item<FieldTypes>
              name="fName"
              label={<span className="text-gray-700 font-medium">Name</span>}
              rules={[
                { required: true, message: 'Please enter your name' }
              ]}
            >
              <Input
                className="h-9 rounded-xl text-base border-gray-200 hover:border-blue-300 focus:border-blue-300 shadow-sm"
                placeholder="John"
                size="large"
              />
            </Form.Item>

            <Form.Item<FieldTypes>
              name="email"
              label={<span className="text-gray-700 font-medium">Email</span>}
              rules={[
                { required: true, message: 'Please enter your email address' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input
                className="h-9 rounded-xl text-base border-gray-200 hover:border-blue-300 focus:border-blue-300 shadow-sm"
                placeholder="name@example.com"
                size="large"
              />
            </Form.Item>

            <Form.Item<FieldTypes>
              name="password"
              label={<span className="text-gray-700 font-medium">Password</span>}
              rules={[
                { required: true, message: 'Please enter your password' },
              ]}
            >
              <Input.Password
                className="h-9 rounded-xl text-base border-gray-200 hover:border-blue-300 focus:border-blue-300 shadow-sm"
                placeholder="••••••••"
                size="large"
              />
            </Form.Item>

            <Form.Item<FieldTypes>
              name="confirmPassword"
              label={<span className="text-gray-700 font-medium">Confirm Password</span>}
              rules={[
                { required: true, message: 'Please confirm your password' },
              ]}
            >
              <Input.Password
                className="h-9 rounded-xl text-base border-gray-200 hover:border-blue-300 focus:border-blue-300 shadow-sm"
                placeholder="••••••••"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                color="primary" variant="filled"
                htmlType="submit"
                block
                size="large"
              >
                Sign up
              </Button>
            </Form.Item>
            <div className="text-center">
                <p className="text-sm text-gray-500">Already have an account? 
                    <span className='text-blue-500 pl-1'><Link to="/login">Login here</Link></span>
                </p>
            </div>
          </Form>
        </div>

        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="relative h-full z-10 flex flex-col justify-between p-16">
            <div>
              <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Reusable Forms <br /> With Seamless Integration
              </h2>
              <p className="text-white/80 text-lg max-w-md">
              Tailor the forms to suit your design and functionality needs.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Customizable Forms</h3>
                  <p className="text-white/70">Tailor forms to fit your needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Easy Integration</h3>
                  <p className="text-white/70">Plug and play with an API key</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Quick & Effortless Sharing</h3>
                  <p className="text-white/70">Generate links instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"/></svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Reusable Forms</h3>
                  <p className="text-white/70">Create once, use anywhere</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" width="30" height="30" viewBox="0 0 20 20"><path fill="#fff" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H10v-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.268A2 2 0 0 1 17 11zM5.5 4h9A1.5 1.5 0 0 1 16 5.5V6H4v-.5A1.5 1.5 0 0 1 5.5 4m9.5 6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1m-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1m5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0z"/></svg>
                  
                </div>
                <div>
                  <h3 className="text-white font-semibold">Seamless Data Collection</h3>
                  <p className="text-white/70">Collect responses with ease</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}