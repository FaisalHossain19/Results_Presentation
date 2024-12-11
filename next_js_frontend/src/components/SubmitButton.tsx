// src/components/SubmitButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
	isSubmitting: boolean;
	label?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, label }) => {
	return (
		<div className="flex justify-center ">
			<Button
				type="submit"
				className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-gradient-to-r from-sky-400 to-blue-500'}`}
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<Loader2 className="animate-spin" />
				) : (
					label || 'Submit'
				)}
			</Button>
		</div>
	);
};

export default SubmitButton;
