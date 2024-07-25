import React from 'react'
import { Mapping } from "../../types/props"
import { Link } from "react-router-dom";

export default function Card({ cards }: Mapping) {
	return (
		<>
			{ cards.map((card, index) => (
				<Link to={`${card.title?.replace(/\s+/g, '-')}`} key={index} className="card">
					<div className="card_top">
						<div className="card_img" style={{ background: `url('${card.image}') center center / cover` }}>
							<div className="card_badge_wrap">
								{ card.badge ?
									<div className="card_badge">
										<div>{card.badge}</div>
									</div> : null
								}
								{ card.badge2 ?
									<div className="card_badge">
										<div>{card.badge2}</div>
									</div> : null
								}
							</div>
						</div>
					</div>
					<div className="card_bottom">						
						<div className="card_date">{card.date}</div>
						<div className="card_bottom_title">{card.title}</div>
						{ card.subTitle? <div className="card_bottom_sub_title">{card.subTitle}</div> : null }
						{/* { card.skills ?
							<div className="card_skill_wrap">
								{ card.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="card_skill" style={{ backgroundColor: skill.color }}>
										<div className="skill_img" style={{ background: `url('${skill.icon}') center center / cover` }}></div>
										<div className="skill_text">{skill.name}</div>
									</div>
								))}
							</div> : null
						} */}
						{ card.hashs ?
							<div className="card_hash_wrap">
								{ card.hashs.map((hash, hashIndex) => (
									<div key={hashIndex} className="card_hash">
										<div className="hash_text">{hash.name}</div>
									</div>
								))}
							</div> : null
						}
					</div>
				</Link>
			))}
	</>
	)
}