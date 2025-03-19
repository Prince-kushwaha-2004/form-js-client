import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-809000 hover:bg-gradient-to-br from-blue-500 to-indigo-600 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.81" height="40" viewBox="0 0 256 286"><path fill="#4285f4" d="M126.936 0a31.94 31.94 0 0 1 15.165 4.126L238.728 58.7a35.7 35.7 0 0 1 10.15 8.581l.096-.057l1.44 2.112l.169.242l1.798 2.65l-.128.077c2.386 4.347 3.699 9.091 3.747 13.917v110.94a31.94 31.94 0 0 1-15.702 27.8l-95.579 56.395a31.8 31.8 0 0 1-12.968 4.256l-.001.142l-6.113.05l.003-.152a32 32 0 0 1-12.846-3.998L11.27 224.309C4.372 220.426.08 213.148 0 205.196V87.707c.057-4.144.779-8.143 2.146-11.821l-.114-.065l2.616-5.467l.148.082a28.44 28.44 0 0 1 9.8-9.62l95.58-56.383A31.9 31.9 0 0 1 126.099 0zM7.5 78.882l-.214.68c-.85 2.815-1.271 5.856-1.239 9.026v116.578a16.1 16.1 0 0 0 8.193 13.876l101.528 57.348a25.9 25.9 0 0 0 9.756 3.173l.211.02l.024-4.932l.02-20.686l-.032-23.482l-.137-.013a20.5 20.5 0 0 1-6.062-1.781l-.714-.353l-.631-.343l-61.507-34.74a14.6 14.6 0 0 1-5.403-5.298a14.65 14.65 0 0 1-2.03-7.318l.001-70.615c-.022-2.247.26-4.437.84-6.502l.197-.66zm239.558-3.473l-42.2 25.203l.093.193c1.042 2.248 1.651 4.641 1.767 7.085l.019.668l-.002 67.2a20.53 20.53 0 0 1-10.098 17.88L138.735 227.8a20.4 20.4 0 0 1-6.442 2.45l-.497.089l.01 4.778l.02 27.678l-.04 16.256l-.006.47l.904-.128a25.7 25.7 0 0 0 8.262-2.845l.7-.398l95.58-56.394a25.9 25.9 0 0 0 9.381-9.563a25.9 25.9 0 0 0 3.344-13.002l.002-110.94c-.034-3.428-.898-6.853-2.496-10.072zM124 86.585c-.914.27-1.794.652-2.615 1.136l-38.813 22.896a10.3 10.3 0 0 0-2.921 2.573q-.47.609-.847 1.274q-.188.335-.356.68l-.209.52a12.6 12.6 0 0 0-.93 3.672q-.069.741-.063 1.5v47.356a7.8 7.8 0 0 0 1.079 3.876a7.74 7.74 0 0 0 2.872 2.814l41.23 23.289a11.7 11.7 0 0 0 5.865 1.516l.44-.017l.003 12.75l.028 12.164l-.03-24.916a11.7 11.7 0 0 0 5.433-1.607l38.813-22.9a11.74 11.74 0 0 0 4.255-4.336c.163-.288.307-.584.445-.886a11.8 11.8 0 0 0 1.072-5l.001-45.06a10.2 10.2 0 0 0-.317-2.408a11 11 0 0 0-.511-1.53a11.6 11.6 0 0 0-.801-1.568l-.177-.284l-.183-.28a13 13 0 0 0-.916-1.19a13.3 13.3 0 0 0-3.486-2.85l-39.239-22.16A11.68 11.68 0 0 0 124 86.585m2.157-80.54A25.86 25.86 0 0 0 113.25 9.64L17.67 66.022a22.36 22.36 0 0 0-7.178 6.739l-.416.635l42.9 24.02l.445-.607a18.4 18.4 0 0 1 4.708-4.321l.564-.346l57.903-34.16a20.52 20.52 0 0 1 20.533-.199l58.539 33.066a22.8 22.8 0 0 1 5.442 4.287l.394.435l42.116-25.154l-.463-.527a29.8 29.8 0 0 0-6.716-5.525l-.687-.402l-96.626-54.572a25.85 25.85 0 0 0-12.97-3.345"/></svg>
                            <h1 className="text-3xl font-bold text-gray-900">FormJS</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' : 'text-blue-500 hover:bg-gradient-to-br from-blue-500 to-indigo-600 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 p-1 text-white hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500 focus:outline-hidden"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:ou800tline-hidden">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gradient-to-br from-blue-500 to-indigo-700 text-white' : 'text-blue-500 hover:bg-gradient-to-br from-blue-500 to-indigo-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
