'use client';

import Logo, { LogoMobile } from '@/components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LogIn, Menu, UserRoundPlus, UserRound} from 'lucide-react';
import LogoutButton from '@/components/logoutButton';

const navList = [
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'About',
		link: '/about',
	},
	{
		label: 'Support',
		link: '/support',
	},
	{
		label: 'Products',
		link: '/products',
	},
	{
		label: 'Versions',
		link: '/versions',
	},
	{
		label: 'Results Dashboard',
		link: '/results',
	},

];

export function Navbar() {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
}

function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
	  <>
		<div className="block border-separate bg-background md:hidden">
		  <nav className="container flex items-center justify-between px-8">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
			  <SheetTrigger asChild>
				<Button variant="ghost" size="icon">
				  <Menu />
				</Button>
			  </SheetTrigger>
			  <SheetContent className="w-[400px] sm:w-[540px]" side="left">
				<Logo />
				<div className="flex flex-col gap-1 pt-4">
				  {navList.map((item) => (
					<NavbarItem
					  key={item.label}
					  link={item.link}
					  label={item.label}
					  clickCallBack={() => setIsOpen((prev) => !prev)}
					/>
				  ))}
				  {/* Add Logout Button */}
				  <div className="pt-4">
					<LogoutButton />
				  </div>
				</div>
			  </SheetContent>
			</Sheet>
			<div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
			  <LogoMobile />
			</div>
			<div className="flex items-center gap-2">
			  <ModeToggle />
			</div>
		  </nav>
		</div>
	  </>
	);
  }

  function DesktopNavbar() {
	return (
	  <div className="hidden border-separate border-b bg-background md:block">
		<nav className="container flex items-center justify-between px-8">
		  {/* Left Section: Logo and Navigation Items */}
		  <div className="flex h-[100px] min-h-[60px] items-center gap-x-4">
			<Logo />
			<div className="flex items-center gap-x-4">
			  {navList.map((item) => (
				<div className="relative group" key={item.label}>
				  <NavbarItem link={item.link} label={item.label} />
				  {/* Tooltip */}
				  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100">
					{item.label}
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		  {/* Right Section: Actions */}
		  <div className="flex items-center gap-2">
			<div className="relative group">
			  <Link href="/sign-in">
				<Button variant="ghost">
				  <LogIn />
				</Button>
			  </Link>
			  {/* Tooltip */}
			  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100">
				Sign In
			  </div>
			</div>
			<div className="relative group">
			  <Link href="/sign-up">
				<Button variant="ghost">
				  <UserRoundPlus />
				</Button>
			  </Link>
			  {/* Tooltip */}
			  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100">
				Sign Up
			  </div>
			</div>
			<div className="relative group">
			  <ModeToggle />
			  {/* Tooltip */}
			  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100">
				Toggle Theme
			  </div>
			</div>
			<div className="relative group">
			  <Link href="/my-account">
				<Button variant="ghost">
				  <UserRound />
				</Button>
			  </Link>
			  {/* Tooltip */}
			  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100">
				My Account
			  </div>
			</div>
			{/* Add Logout Button */}
			<div className="relative group">
			  <LogoutButton />
			</div>
		  </div>
		</nav>
	  </div>
	);
  }



interface NavbarItemProps {
	link: string;
	label: string;
	clickCallBack?: () => void;
}

function NavbarItem({ link, label, clickCallBack }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === link;
	return (
		<>
			<div className="relative flex items-center">
				<Link
					href={link}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'w-full justify-start text-lg text-muted-foreground hover:text-foreground',
						isActive && 'text-foreground'
					)}
					onClick={() => {
						if (clickCallBack) clickCallBack();
					}}
				>
					{label}
				</Link>
				{isActive && (
					<div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
				)}
			</div>
		</>
	);
}
