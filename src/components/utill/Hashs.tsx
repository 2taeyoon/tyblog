import React, { useEffect } from 'react'
import { HashsProps } from "../../types/props";

export default function Hashs({selectedHash, setSelectedHash, uniqueHashs, sessionName}: HashsProps) {

	useEffect(() => {
		// 컴포넌트 마운트 시 sessionStorage에서 selectedHash 상태를 로드
		const savedHash = sessionStorage.getItem(sessionName);
		if (savedHash) {
			setSelectedHash(savedHash);
		}
	}, [sessionName, setSelectedHash]);

	useEffect(() => {
		if (selectedHash) { // selectedHash가 null이 아닌 경우에만 sessionStorage에 저장
			sessionStorage.setItem(sessionName, selectedHash);
		} else {
			sessionStorage.removeItem(sessionName); // 선택된 해시가 없는 경우, 세션스토리지 제거
		}
	}, [sessionName, selectedHash]);

	return (
		<div className="hashs_wrap">
			<button className={!selectedHash ? 'active' : ''} onClick={() => setSelectedHash(null)}>모든 게시물</button>
			{uniqueHashs.map((hash: string) => (
				<button key={hash} className={selectedHash === hash ? 'active' : ''} onClick={() => setSelectedHash(hash)}>
					{hash}
				</button>
			))}
		</div>
	)
}