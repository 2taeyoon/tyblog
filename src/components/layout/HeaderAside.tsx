'use client';

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react'
import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";

export default function HeaderAside() {
	const [isActive, setIsActive] = useState<boolean>(false);

  const trueActive = () => {
    setIsActive(true);
  };
	const falseActive = () => {
    setIsActive(false);
  };

	useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isActive]);

	const pathname = usePathname();

	// 특정 경로에서 Aside와 Header 숨기기
	const hideAsideAndHeader = ["/post"].includes(pathname);

	return (
		<div className={`${ isActive ? 'side_active' : '' }`}>
			{!hideAsideAndHeader && <Header trueActive={trueActive}/>}
			{!hideAsideAndHeader && <Aside falseActive={falseActive}/>}
			<div className="bg_active" onClick={falseActive}></div>
		</div>
	)
}
