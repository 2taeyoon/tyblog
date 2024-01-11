import React from 'react'
import { TabsProps } from "../../types/props";

export default function Tabs({cards, activeTab, setActiveTab}: TabsProps) {

  // 버튼의 개수를 계산하기 위해 숫자 올림
  const numberOfTabs = Math.ceil(cards.length / 6);

  const renderTabs = () => {
    const tabs = [];
    const isStartTab = activeTab <= 3;
    const isEndTab = activeTab > numberOfTabs - 3;

    if (isStartTab) {
      for (let i = 1; i <= 4; i++) {
        tabs.push(i);
      }
      tabs.push('...');
      tabs.push(numberOfTabs);
    } else if (isEndTab) {
      tabs.push(1);
      tabs.push('...');
      for (let i = numberOfTabs - 3; i <= numberOfTabs; i++) {
        tabs.push(i);
      }
    } else {
      tabs.push(1);
      tabs.push('...');
      for (let i = activeTab - 1; i <= activeTab + 1; i++) {
        tabs.push(i);
      }
      tabs.push('...');
      tabs.push(numberOfTabs);
    }

    return tabs.map((tab, index) => (
      <button key={index} onClick={() => tab !== '...' && setActiveTab(Number(tab))}
				className={tab === activeTab ? 'tab_active' : ''}
			>
        {tab}
      </button>
    ));
  };

	return (
		<div className="common_tabs">
			{renderTabs()}
		</div>
	)
}
