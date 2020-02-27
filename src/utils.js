function onClickOpenLinkInNewTab(link) {
    return () => window.open(link);
}

export { onClickOpenLinkInNewTab };
