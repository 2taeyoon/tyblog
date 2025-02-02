import React from 'react'
import { Mapping } from "../../types/props"
import Link from "next/link";

export default function Card({ cards, sessionName }: Mapping) {
	return (
		<>
			{ cards.map((card, index) => (
				<Link href={`/${sessionName}/${card.title?.replace(/\s+/g, '-')}`} key={index} className="card">
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
						<div className="card_bottom_title">{card.title}</div>
						<div className="card_date">{card.date}</div>
						{ card.subTitle? <div className="card_bottom_sub_title">{card.subTitle}</div> : null }
					</div>
				</Link>
			))}
	</>
	)
}