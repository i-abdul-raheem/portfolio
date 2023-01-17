export default function ContactInfo(props){
	return (
		<>
			<div className="card" >
				<div className="about">
					<div className="about-title">Contact Me</div><br/>
					<div className="about-description" style={{textAlign: "center"}}>
						<img src={require("../assets/images/qr.png")} />
					</div>
				</div>
			</div>
		</>
	);
}