import { ChartPie } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href="/"
			className="flex items-center gap-2"
		>
			<ChartPie className="stroke h-11 w-11 stroke-sky-400 stroke-[1.5]" />
			<p className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
				TestDash
			</p>
		</Link>
	);
};

export const LogoMobile = () => {
	return (
		<Link
			href="/"
			className="flex items-center gap-2"
		>
			<p className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
				TestDash
			</p>
		</Link>
	);
};

export default Logo;
