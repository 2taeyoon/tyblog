import React from 'react'
import { Mapping } from "../../types/props"
import { Link } from "react-router-dom";

export default function Card({ cards }: Mapping) {
	return (
		<div className="card_wrap">
			{ cards.map((card, index) => (
				// <Link to={`/codestudy/${encodeURIComponent(card.title?.replace(/\s+/g, '-'))}`} key={index} className="card">
				<Link to={`/codestudy/${card.title ? encodeURIComponent(card.title.replace(/\s+/g, '-')) : 'default-title'}`} key={index} className="card">
				{/* <Link to={`/codestudy/${card.title?.replace(/\s+/g, '-')}`} key={index} className="card"> */}
					<div className="card_top">
						<div className="card_img" style={{ background: `url('${card.image}') center center / cover` }}>
							{ card.badge ?
								<div className="card_badge">
									<div>{card.badge}</div>
								</div> : null
							}
						</div>
					</div>
					<div className="card_bottom">
						<div className="card_bottom_profile">
							<div className="card_profile" style={{ background: `url('${card.profileImage}') center center / cover` }}></div>
							<div className="card_nickname">{card.nickname}</div>
							<div className="card_date">{card.date}</div>
						</div>
						<div className="card_bottom_title">{card.title}</div>
						<div className="card_bottom_sub_title">{card.subTitle}</div>
						{ card.skills ?
							<div className="card_skill_wrap">
								{ card.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="card_skill" style={{ backgroundColor: skill.color }}>
										<div className="skill_img" style={{ background: `url('${skill.icon}') center center / cover` }}></div>
										<div className="skill_text">{skill.name}</div>
									</div>
								))}
							</div> : null
						}
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
	</div>
	)
}