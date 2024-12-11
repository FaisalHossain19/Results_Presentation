import FormCard from '@/components/FormCard';
import RegisterForm from '@/components/RegisterForm';

function Register() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center p-4">
			<FormCard
				title="Register"
				description="Create a new user"
			>
				<RegisterForm />
			</FormCard>
		</div>
	);
}
export default Register;
