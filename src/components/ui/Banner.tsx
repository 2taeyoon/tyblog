import React from 'react'
import { CardProps } from "../../types/props"

export default function Banner({CardFind} : {CardFind: CardProps}) {
	return (
		<div className="banner">
			<div className="banner_image" style={{ background: `url('${CardFind?.image}') center center / cover` }}></div>
			<div className="banner_info">
				<div className="card_title">{CardFind?.title}</div>
				<div className="card_bottom_profile">
					<div className="card_nickname">{CardFind?.nickname}</div>
					<div className="card_date">{CardFind?.date}</div>
				</div>
				{ CardFind.skills ?
					<div className="card_skill_wrap">
						{ CardFind.skills.map((skill, skillIndex) => (
							<div key={skillIndex} className="card_skill" style={{ backgroundColor: skill.color }}>
								<div className="skill_img" style={{ background: `url('${skill.icon}') center center / cover` }}></div>
								<div className="skill_text">{skill.name}</div>
							</div>
						))}
					</div> : null
				}
				{ CardFind?.hashs ? (
					<div className="card_hash_wrap">
						{ CardFind.hashs.map((hash, hashIndex) => (
							<div key={hashIndex} className="card_hash">
								<div className="hash_text">{hash.name}</div>
							</div>
						))}
					</div>	) : null}
			</div>
		</div>
	)
}
