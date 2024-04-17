import { useState } from "react"

import type { TabProp, TabSectionProp, Tab } from "./types"

import classes from "./tabs.module.css"

let tabId = 0

const TABS_MOCK: Tab[] = [
    {
        id: tabId,
        groupName: "Group One",
        groupContent: <div>Bacon Lorem Ipsum</div>,
    },
    {
        id: ++tabId,
        groupName: "Group Two",
        groupContent: <div>Lorem Ipsum Part Two</div>,
    },
    {
        id: ++tabId,
        groupName: "Group Three",
        groupContent: <div>Middle Earth Lorem Ipsum</div>,
    },
]

export default function Tabs() {
    const [ selectedTab, setSelectedTab ] = useState(TABS_MOCK[0].id);

    const Tab = ({ title, tabId, onClick, className }: TabProp) => {
        return (
            <button 
                onClick={() => onClick(tabId)}
                className={className}
            >
                { title }
            </button>
        )
    }

    const TabSection = ({ children, className }: TabSectionProp) => {
        return (
            <section className={className}>
                { children }
            </section>
        )
    }

    return (
        <>
            <nav className={`${classes['button-group']}`}>
                { TABS_MOCK.map((tab) => (
                    <Tab 
                        title={tab.groupName} 
                        tabId={tab.id}
                        onClick={setSelectedTab}
                        className={`${tab.id === selectedTab ? classes['selected-button'] : ''}`}
                    /> 
                ))}
            </nav>
            <main>
                { TABS_MOCK.map((tab) => (
                    <TabSection
                        className={`${tab.id !== selectedTab ? classes.hidden : ''}`}
                    >
                        {tab.groupContent}
                    </TabSection> 
                ))}
            </main>
        </>
    )
}