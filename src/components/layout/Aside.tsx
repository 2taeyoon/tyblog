import React from "react";
import { Link } from "react-router-dom";
import Profile from "../ui/Profile";
import AnotherSite from "../ui/AnotherSite";

import DesignStudyData from "../../data/designStudyData.json";
import PublishingStudyData from "../../data/publishingStudyData.json";
import EtcStudyData from "../../data/etcStudyData.json";
import ListLink from "../list/ListLink";

interface AsideProps {
  falseActive: () => void;
}

export default function Aside({falseActive}: AsideProps) {
	const DesignStudyCount = DesignStudyData.cards.length;
	const PublishingStudyCount = PublishingStudyData.cards.length;
	const EtcStudyCount = EtcStudyData.cards.length;

  return (
		<div className="aside_wrap">
			<div className="aside">
				<Profile/>
				<AnotherSite/>
				<nav className="nav">
					<Link
						to="/"
						className="home"
					>
						HOME
					</Link>
					<div className="nav_wrap">
						<div className="category">Study</div>
						<div className="nav_list">
							<ListLink linkTo="/ds" title="Design" baseClass="item" count={DesignStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
							<ListLink linkTo="/ps" title="Publishing" baseClass="item" count={PublishingStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
							<ListLink linkTo="/es" title="Etc" baseClass="item" count={EtcStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
						</div>
					</div>
				</nav>
			</div>
		</div>
  );
}
