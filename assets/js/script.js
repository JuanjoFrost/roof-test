const calculateAreaPanels = (panelHeight,panelWidth , roofWidth,roofHeight) =>
{
    if(panelHeight > roofHeight || panelWidth > roofWidth || panelWidth > roofHeight || panelHeight > roofWidth){
        console.log('No caben paneles :(');
        return;
    }

    //Considering panel height as height
    const xRoofA = roofWidth / panelWidth ;
    const yRoofA = roofHeight / panelHeight;

    let totalPanelsA =  xRoofA * yRoofA;

    //Considering panel width as height
    const xRoofB = roofWidth / panelHeight;
    const yRoofB = roofHeight / panelWidth;

    let totalPanelsB = xRoofB * yRoofB;

    let maxPanels = Math.max(totalPanelsA, totalPanelsB);

    maxPanels = Math.floor(maxPanels);

    return maxPanels;
}

//Ejercicio 2.

const calculateAreaPanelsTriangle = (panelHeight, panelWidth, base, height) => {
    // Verifying if panels fits int the roof
    if (panelHeight > height || panelWidth > base || panelWidth > height || panelHeight > base) {
        console.log('No caben paneles :(');
        return;
    }

    // calculating triangle area
    const triangleArea = (base * height) / 2;

    // Function in order to calculate total panels putting width or height as x or y.
    const panelsA = (panelWidth, panelHeight) => {
        let totalPanels = 0;
        for (let y = panelHeight; y <= height; y += panelHeight) {
            let availableWidth = (y / height) * base;
            totalPanels += Math.floor(availableWidth / panelWidth);
        }
        return totalPanels;
    }

    // panel height as height
    const totalPanelsA = panelsA(panelHeight, panelWidth);

    // panel width as width
    const totalPanelsB = panelsA(panelWidth, panelHeight);

    // getting the max quantity of panels between the orientations
    let maxPanels = Math.max(totalPanelsA, totalPanelsB);

    return maxPanels;
}

const showResults = () => {
    let resultRoofRectangle = calculateAreaPanels(1,2,3,5);
    let resultRoofTriangle = calculateAreaPanelsTriangle(1,2,4,5);

    console.log(`The result for the first exercise (rectangle roof) is: ${resultRoofRectangle}\nand the second result is (triangle roof) is: ${resultRoofTriangle}`);
}

showResults();
