import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';

interface FormCardProps {
	title: string;
	description?: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	footer?: React.ReactNode;
	children: React.ReactNode;
}

function FormCard(props: FormCardProps) {
	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>{props.description}</CardDescription>
			</CardHeader>
			<CardContent>{props.children}</CardContent>
			<CardFooter>{props.footer}</CardFooter>
		</Card>
	);
}
export default FormCard;