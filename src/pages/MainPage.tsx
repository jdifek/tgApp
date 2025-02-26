import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const NAV_ITEMS = [
	{
		href: '/friends',
		image: '/images/friends.PNG',
		label: 'Друзья',
	},
	{
		href: '/clans',
		image: '/images/clans.PNG',
		label: 'Кланы',
	},
	{
		href: '/quests',
		image: '/images/quests.PNG',
		label: 'Квесты',
	},
	{
		href: '/market',
		image: '/images/market.PNG',
		label: 'Рынок',
	},
]

export default function MainPage() {
	const navigate = useNavigate()

	const cookies = 149493
	const level = 1
	const eggsPerDay = 1454

	const leftItems = NAV_ITEMS.slice(0, 2)
	const rightItems = NAV_ITEMS.slice(2)

	return (
		<div className='min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col items-center relative overflow-hidden'>
			{/* Холм */}
			<div className='absolute bottom-0 left-0 w-full h-1/2 bg-green-500 rounded-t-full z-0'></div>

			<div className='grid grid-cols-4 gap-4 p-4'>
				{/* Left nav */}
				<div className='flex flex-col gap-4 col-span-1'>
					{leftItems.map((item, index) => (
						<button
							key={index}
							className='relative bg-yellow-300 p-3 rounded-md flex flex-col items-center'
							onClick={() => navigate(item.href)}
						>
							<img
								src={item.image}
								className='rounded-md w-14 h-14 max-w-full'
								alt={item.label}
							/>
							<span className='absolute -top-3 text-sm font-bold text-yellow-outline'>
								{item.label}
							</span>
						</button>
					))}
				</div>

				{/* Center */}
				<div className='flex col-start-2 col-end-4 items-center gap-2 justify-center'>
					<span className='text-brown-outline font-semibold text-4xl ml-2'>
						{cookies}
					</span>
					<img src='/images/cookie.png' className='w-8 h-8' alt='Печенька' />
				</div>

				{/* Right nav */}
				<div className='flex flex-col col-span-1 gap-4'>
					{rightItems.map((item, index) => (
						<button
							key={index}
							className='relative bg-yellow-300 p-3 rounded-md flex flex-col items-center'
							onClick={() => navigate(item.href)}
						>
							<img
								src={item.image}
								className='rounded-md w-14 h-14 max-w-full'
								alt={item.label}
							/>
							<span className='absolute -top-3 text-sm font-bold text-yellow-outline'>
								{item.label}
							</span>
						</button>
					))}
				</div>
			</div>

			{/* Main Chicken */}
			<div className='flex-1 flex flex-col items-center justify-center relative pb-32 min-h-0 main-block'>
				<div className='flex flex-col items-center justify-center h-full max-h-full'>
					<img
						src='/images/egg.PNG'
						alt='Яйцо'
						className='w-36 h-48 z-10 relative'
					/>

					{/* Level Info */}
					<div className='mt-4 bg-yellow-700 border-2 border-[#171717] rounded-lg p-2 pt-4 w-80 flex justify-between items-center z-10 relative'>
						<div className='text-white'>
							<span className='absolute -top-6 text-2xl font-bold text-yellow-outline'>
								Уровень {level}
							</span>
							<div className='flex items-center gap-1'>
								<span className='text-2xl font-bold text-brown-outline'>
									{eggsPerDay}
								</span>
								<img src='/images/egg.PNG' className='w-8 h-10' alt='Яйцо' />
								<span className='text-2xl font-bold text-brown-outline'>
									в день
								</span>
							</div>
						</div>
						<div className='flex flex-col items-end'>
							<div className='flex items-center gap-1'>
								<span className='text-xl font-bold text-brown-outline'>
									100
								</span>
								<img
									src='/images/cookie.png'
									className='w-4 h-4'
									alt='Печенька'
								/>
							</div>
							<button className='bg-green-500 border border-[#171717] px-2 rounded flex items-center text-xl font-bold text-brown-outline'>
								Улучшить
							</button>
						</div>
					</div>

					<button className='mt-4 border-2 border-[#171717] bg-yellow-400 w-80 py-2 rounded-lg text-2xl font-bold text-dark-outline z-10'>
						Начать сбор
					</button>
				</div>
			</div>
			<BottomNav />
		</div>
	)
}
