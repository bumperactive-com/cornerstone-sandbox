export default function condenseCartItemTitles(titleList) {
    let condensedTitleList = titleList.map(title => {
    //Split each title based on where space is located in order to reformat by taking each split piece of the title
    const splitTitle = title.split(' ');

    if(splitTitle.length === 4) {
            return (splitTitle[0] + splitTitle[1] + splitTitle[2] + " " + splitTitle[3]);
        } else if (splitTitle.length === 5) {
            return (splitTitle[0] + splitTitle[1] + splitTitle[2] + splitTitle[3] + " " + splitTitle[4]);
        } 
    });
    return condensedTitleList;
}