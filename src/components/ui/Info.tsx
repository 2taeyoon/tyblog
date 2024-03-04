import React from 'react'
import { useNavigate } from "react-router-dom";
import { CardUndefined } from "../../types/props";

export default function Info({cards}: CardUndefined) {
	const navigate = useNavigate(); 
	return (
		<div className="info_wrap">
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
					<div style={{ background: `url('/images/close.png') center center / cover` }}></div>
				</div>
			</div>
			{ cards?.skills ?
				<div className="card_skill_wrap">
					{ cards.skills.map((skill, skillIndex) => (
						<div key={skillIndex} className="card_skill" style={{ backgroundColor: skill.color }}>
							<div className="skill_img" style={{ background: `url(/${skill.icon}) center center / cover` }}></div>
							<div className="skill_text">{skill.name}</div>
						</div>
					))}
				</div> : null
			}
			{ cards?.hashs ?
				<div className="card_hash_wrap">
					{ cards.hashs.map((hash, hashIndex) => (
						<div key={hashIndex} className="card_hash">
							<div className="hash_text">{hash.name}</div>
						</div>
					))}
				</div> : null
			}
		</div>
	)
}
