import $ from 'jquery';
import swal from 'sweetalert';
import sizeImage from '../../../img/shirt-size-chart.jpg';
import { domainToUnicode } from 'url';
import { stubFalse } from 'lodash';


export default function customDetails() {
    // Collect form field elements
    const formFieldArray = document.getElementsByClassName('form-field');
    // Slice out hidden search inputs - this script will effect them adversely
    const attributesArray = [].slice.call(formFieldArray, 2);


    Array.prototype.forEach.call(attributesArray, attribute => {
        // Loop-specific variables
        const fieldLabel = attribute.getElementsByTagName('label')[0];
        const formSelect = attribute.getElementsByTagName('select')[0];

        if (!fieldLabel) {
            console.warn('Label not found for attribute:', attribute);
            return; // Skip this iteration if no label is found
        }
        
        const attributeLabel = fieldLabel.innerHTML;
        // Methods
        const hideLabelAndValue = () => {
            attribute.style.display = 'none';
            formSelect.style.display = 'none';
        };
        // Tables
        const sizeChartLadies = `
            <tr>
                <th>Women's</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>2XL</th>
                <th>3XL</th>
            </tr>
            <tr>
                <td>Length</td>
                <td>24 3/4</td>
                <td>25 3/8</td>
                <td>26</td>
                <td>26 5/8</td>
                <td>27 1/4</td>
                <td>27 7/8</td>
                <td>28 1/2</td>
            </tr>
            <tr>
                <td>Width</td>
                <td>16 1/2</td>
                <td>17 1/2</td>
                <td>18 1/2</td>
                <td>19 1/2</td>
                <td>21</td>
                <td>22 1/2</td>
                <td>24</td>
            </tr>
        `;
        const sizeChartUnisex = `
            <tr>
                <th>Unisex</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>2XL</th>
                <th>3XL</th>
            </tr>
            <tr>
                <td>Length</td>
                <td>26 1/2</td>
                <td>27 1/2</td>
                <td>28 1/2</td>
                <td>29 1/2</td>
                <td>30 1/2</td>
                <td>31 1/2</td>
                <td>32 1/2</td>
            </tr>
            <tr>
                <td>Width</td>
                <td>16</td>
                <td>18</td>
                <td>20</td>
                <td>22</td>
                <td>24</td>
                <td>26</td>
                <td>28</td>
            </tr>
        `;
        /*
        const sizeChartLong = `
            <tr>
                <th>Longsleeve</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>2XL</th>
                <th>3XL</th>
                <th>4XL</th>
            </tr>
            <tr>
                <td>Length</td>
                <td>26</td>
                <td>28</td>
                <td>30</td>
                <td>31<td>
                <td>32</td>
                <td>33</td>
                <td>34</td>
            </tr>
            <tr>
                <td>Width</td>
                <td>18</td>
                <td>20</td>
                <td>22</td>
                <td>24</td>
                <td>26</td>
                <td>28</td>
                <td>30</td>
            </tr>
        `;
        */


        //For anything that has an option of apparel size: 
        if (attributeLabel.includes('Apparel Size')) {
            attribute.innerHTML += `<br><a id="size-chart-full">Size Chart</a>
                                    <br><a id="size-chart-mobile">Size Chart</a>`;
            $('#size-chart-full').on('click', () => {
                swal({
                    html: `<img id="size-img-full" src=${sizeImage} />
                            <table class='size-table-full'>
                                ${sizeChartLadies}
                            </table>
                            <br>
                            <table class='size-table-full'>
                                ${sizeChartUnisex}
                            </table>`,
                    title: 'Size Chart',
                    width: '60%',
                }).catch(swal.noop);
            });
            $('#size-chart-mobile').on('click', () => {
                swal({
                    html: `<img id="size-img-mobile" src=${sizeImage} />
                            <table class='size-table-mobile'>
                                ${sizeChartLadies}
                            </table>
                            <br>
                            <table class='size-table-mobile'>
                                ${sizeChartUnisex}
                            </table>`,
                    title: 'Size Chart',
                    width: '100%',
                }).catch(swal.noop);
            });
        }
    

        // STYLE
        //  if (attributeLabel.includes('Apparel Style')) {
        //      hideLabelAndValue();
        //  }

        // COLOR
        if (attributeLabel.includes('Apparel Color')) {
            hideLabelAndValue();
        }
        
         // COLOR
        //  if (attributeLabel.includes('Custom Sticker')) {
        //     hideLabelAndValue();
        // }

        // BRAND
        if (attributeLabel.includes('Apparel Brand')) {
            hideLabelAndValue();
        }

        // TYPE
        if (attributeLabel.includes('Product Type')) {
            hideLabelAndValue();
        }

        // Hides the options which were set up to have radio button labels set within BigCommerce products
        if (attributeLabel.includes('RadioLabelSizes')) {
            hideLabelAndValue();
        }

        if (attributeLabel.includes('RadioLabelQuantities')) {
            hideLabelAndValue();
        }

    });
}



