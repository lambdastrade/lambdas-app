export interface IndicatorStep {
    name: string;
    status: 'upcoming' | 'complete';
}

interface ProgressIndicatorProps {
    steps: IndicatorStep[];
}

export const ProgressIndicator: React.FunctionComponent<ProgressIndicatorProps> = (
    props: ProgressIndicatorProps
) => {
    return (
        <nav className="flex items-center justify-center" aria-label="Progress">
            <ol role="list" className="flex items-center space-x-4">
                {props.steps.map((step: any) => (
                    <li key={step.name}>
                        {step.status === 'complete' ? (
                            <a
                                href="#"
                                className="block h-2 w-2 rounded-full bg-white hover:px-2 transition-all">
                                <span className="sr-only">{step.name}</span>
                            </a>
                        ) : (
                            <a
                                className="block h-2 w-2 rounded-full bg-gray-300 hover:px-2 transition-all">
                                <span className="sr-only">{step.name}</span>
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
