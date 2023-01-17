import Typewriter from 'typewriter-effect';

export default function Welcome(props){
	return (
		<>
			<div className="card">
				<div className="welcome">
					<div className="welcome-title">HOLA!</div>
					<div className="welcome-description">Welcome to Abdul Raheem's portfolio.</div>
					<div className="welcome-services">
						<Typewriter
	                        options={{
	                            strings: [
	                                'Web Application Development',
	                                'Mobile Application Development',
	                                'Blockchain',
	                                'Artificial Intelligence',
	                                'Cyber Security',
	                                'Software Quality Assurance'
	                            ],
	                            autoStart: true,
	                            loop: true,
	                        }}
	                    />
                    </div>
				</div>
			</div>
		</>
	);
}