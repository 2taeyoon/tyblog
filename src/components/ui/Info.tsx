import React from 'react'
import { useNavigate } from "react-router-dom";
import { CardUndefined } from "../../types/props";

export default function Info({cards}: CardUndefined) {
	const navigate = useNavigate(); 
	return (
		<div className="info">
			<div className="info_left">
				<div className="info_profile" style={{ background: `url('${cards?.profileImage}') center center / cover` }}></div>
				<div className="info_text">
					<div className="info_title">{cards?.title}</div>
					<div className="info_nickname_date">
						<div>{cards?.nickname}</div>
						<div>{cards?.date}</div>
					</div>
				</div>
			</div>
			<div className="info_right" onClick={() => navigate("/designportfolio")}>
				<div style={{ background: `url('/images/close.png') center center / cover`, width: '25px', height: '25px' }}></div>
			</div>
	</div>
	)
}
