export type TabProp = {
    title: string;
    tabId: number;
    onClick: React.Dispatch<React.SetStateAction<number>>;
    className: string;
}

export type TabSectionProp = {
    children: string | JSX.Element;
    className: string;
}

export type Tab = {
    id: number;
    groupName: string;
    groupContent: string | JSX.Element;
}