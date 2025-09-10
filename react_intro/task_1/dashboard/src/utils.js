function getCurrentYear() {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
    console.log("---", isIndex);
    if (isIndex) {
        const str = "<strong>Holberton School</strong>";
       return <span dangerouslySetInnerHTML={{ __html: str }} />;
    } else {
        const str = "<strong>Holberton School main dashboard</strong>";
       return <span dangerouslySetInnerHTML={{ __html: str }} />;
    }
}

export { getCurrentYear, getFooterCopy };
