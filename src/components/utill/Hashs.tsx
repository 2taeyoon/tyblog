import React, { useRef, useEffect } from 'react';
import { HashsProps } from "../../types/props";

export default function Hashs({selectedHash, setSelectedHash, uniqueHashs, sessionName}: HashsProps) {
	// 마우스 드래그시 해시태그 스크롤 좌우로 이동 START!
  const isDragging = useRef(false); // 마우스 드래그 상태 확인
  const startPos = useRef(0); // 드래그 시작점 X 좌표 저장값
  const scrollLeft = useRef(0); // 드래그 시작 시의 스크롤 위치 저장값
  const sliderRef = useRef<HTMLDivElement>(null); // 슬라이드할 요소를 DOM 값으로 저장

	// 마우스를 누를 때 드래그를 시작하는 함수입니다.
  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true; // 드래그 상태가 true일 때
    startPos.current = e.pageX - sliderRef.current!.offsetLeft; // 드래그 시작 지점 저장
    scrollLeft.current = sliderRef.current!.scrollLeft; // 스크롤 시작 지점 저장
  };

	// 드래그 종료 시 상태 false
  const stopDragging = () => {
    isDragging.current = false;
  };

	// 실제 드래그를 처리
  const onDrag = (e: MouseEvent) => {
    if (!isDragging.current) return; // 드래그 중이 아니라면 그대로 반환
    e.preventDefault(); // 기본 동작 제거
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startPos.current) * 2; // 드래그 거리를 계산하여 스피드 조절
    sliderRef.current!.scrollLeft = scrollLeft.current - walk; // 스크롤 위치를 업데이트합니다.
  };

	// 마우스 이벤트 리스너를 추가 및 제거
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mousemove', onDrag);
      slider.addEventListener('mouseleave', stopDragging);
      slider.addEventListener('mouseup', stopDragging);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('mousemove', onDrag);
        slider.removeEventListener('mouseleave', stopDragging);
        slider.removeEventListener('mouseup', stopDragging);
      }
    };
  }, []);
	// 마우스 드래그시 해시태그 스크롤 좌우로 이동 END!

	// 해시태그 클릭시 세션스토리지 저장 START!
	useEffect(() => { // 컴포넌트 로드 시 sessionStorage에서 selectedHash 상태를 로드
		const savedHash = sessionStorage.getItem(sessionName);
		if (savedHash) {
			setSelectedHash(savedHash);
		}
	}, [sessionName, setSelectedHash]);

	useEffect(() => { // selectedHash가 null이 아닌 경우에만 sessionStorage에 저장
		if (selectedHash) {
			sessionStorage.setItem(sessionName, selectedHash);
		} else {
			sessionStorage.removeItem(sessionName); // 선택된 해시가 없는 경우, 세션스토리지 제거
		}
	}, [sessionName, selectedHash]);
	// 해시태그 클릭시 세션스토리지 저장 END!

	return (
		<div className="hashs_wrap" >
			<div className="hashs" ref={sliderRef} onMouseDown={startDragging} onMouseLeave={stopDragging} onMouseUp={stopDragging}>
				<div className={!selectedHash ? 'active' : ''} onClick={() => setSelectedHash(null)}>전체</div>
				{uniqueHashs.map((hash: string) => (
					<div key={hash} className={selectedHash === hash ? 'active' : ''} onClick={() => setSelectedHash(hash)}>
						{hash}
					</div>
				))}
			</div>
		</div>
	)
}