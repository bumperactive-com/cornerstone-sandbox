//This function is used in selectItems() to select options from dropdown when on a link with params
export default function selectFromDropdown(optionsArray, comparisonValue, dropdown) {
    var formattedComparisonValue = comparisonValue.toLowerCase().replace('+', '').replace(/\s+/g, '');
  
    optionsArray.forEach(optionInstance => {
      if(optionInstance.innerText.toLowerCase().replace('+', '').replace(/\s+/g, '') == formattedComparisonValue) {
        dropdown.value =  optionInstance.value;
      }
    });
    //Triggers the event change with Javascript
    dropdown.dispatchEvent(new Event('change'));
  }