// src/components/PasswordRequirements.tsx
import React from 'react';
import { Check, X } from 'lucide-react';

interface PasswordRequirementsProps {
	passwordValue: string;
}
const requirements = [
	{ regex: /.{8,}/, text: 'At least 8 characters long' },
	{ regex: /[A-Z]/, text: 'Contains uppercase letter' },
	{ regex: /[a-z]/, text: 'Contains lowercase letter' },
	{ regex: /[0-9]/, text: 'Contains digit' },
	{ regex: /[^A-Za-z0-9]/, text: 'Contains special character' },
];
function PasswordRequirements({ passwordValue }: PasswordRequirementsProps) {
	return (
		<div>
			<h3 className="text-sm font-medium text-gray-700">
				Password Requirements:
			</h3>
			<ul className="space-y-1">
				{requirements.map((req, index) => (
					<ValidationItem
						key={index}
						passed={req.regex.test(passwordValue)}
						text={req.text}
					/>
				))}
			</ul>
		</div>
	);
}

function ValidationItem({ passed, text }: { passed: boolean; text: string }) {
	return (
		<li className="flex items-center space-x-2">
			{passed ? (
				<Check className="w-4 h-4 text-green-500" />
			) : (
				<X className="w-4 h-4 text-red-500" />
			)}
			<span className={`text-sm ${passed ? 'text-green-500' : 'text-red-500'}`}>
				{text}
			</span>
		</li>
	);
}

export default PasswordRequirements;