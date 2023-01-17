export default function Social(props){
	return (
		<>
			<div className="card" >
				<div className="social">
					<a target="_blank" title="LinkedIn" rel="noreferrer" href="https://www.linkedin.com/in/abdul-raheem-839637208/">
						<i className="fa fa-linkedin"></i>
					</a>
					<a target="_blank" title="GitHub" rel="noreferrer" href="https://github.com/i-abdul-raheem">
						<i className="fa fa-github"></i>
					</a>
					<a target="_blank" title="StackOverflow" rel="noreferrer" href="https://stackoverflow.com/users/19925764/abdul-raheem">
						<i className="fa fa-stack-overflow"></i>
					</a>
					<a target="_blank" title="Email" rel="noreferrer" href="mailto:abdul.raheem.11885@gmail.com">
						<i className="fa fa-envelope"></i>
					</a>
					<a target="_blank" title="Resume" rel="noreferrer" href={require("../assets/Abdul Raheem Resume.pdf")}>
						<i className="fa fa-file"></i>
					</a>
				</div>
			</div>
		</>
	);
}