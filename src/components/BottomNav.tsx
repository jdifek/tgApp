import { useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
	{
		href: '/',
		label: 'Главная',
	},
	{
		href: '/farm',
		label: 'Ферма',
	},
	{
		href: '/wallet',
		label: 'Кошелек',
	},
]

export default function BottomNav() {
	const navigate = useNavigate()
	const location = useLocation()

	const isActive = (path: string) => location.pathname === path

	return (
		<div className='w-full p-4 flex items-center justify-evenly fixed bottom-2 bg-image'>
			{NAV_ITEMS.map((item, index) => (
				<button
					key={index}
					className={`flex flex-col items-end text-white ${
						!isActive(item.href) && 'opacity-50'
					}`}
					onClick={() => navigate(item.href)}
				>
					<span className='text-2xl font-bold text-dark-outline'>
						{item.label}
					</span>
				</button>
			))}
		</div>
	)
}
