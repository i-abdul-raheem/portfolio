export default function Profile(props){
	return (
		<>
			<main>
			    <div className="column2">
					<div className="card">
						<div className="profile">
							<div className="profile-image">
								<img src={require("../assets/images/hello.png")} />
							</div>
							<div className="profile-title">Abdul Raheem</div>
							<div className="profile-position">MERN STACK DEVELOPER</div>
						</div>
					</div>
				</div>
			    <div className="column2">
					<div className="card" >
						<div className="about">
							<div className="about-title">Technologies</div>
							<div className="about-description">
								<ul>
									<li><a target="_blank" rel="noreferrer" href="https://www.mongodb.com/">MongoDB</a></li>
									<li><a target="_blank" rel="noreferrer" href="https://expressjs.com/">Express JS</a></li>
									<li><a target="_blank" rel="noreferrer" href="https://reactjs.org/">React JS</a></li>
									<li><a target="_blank" rel="noreferrer" href="https://nodejs.org/">Node JS</a></li>
									<li><a target="_blank" rel="noreferrer" href="https://docs.soliditylang.org/">Solidity</a></li>
									<li><a target="_blank" rel="noreferrer" href="https://web3js.readthedocs.io/">Web3.js</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}